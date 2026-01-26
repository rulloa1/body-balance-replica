import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { CalendarDays, Clock, User, Mail, Phone, FileText, CheckCircle2, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { z } from "zod";

const services = [
  "Back Pain Treatment",
  "Neck Pain Treatment",
  "Massage Therapy",
  "Pregnancy Care",
  "Chiropractic Adjustment",
  "Personal Injury",
  "Initial Consultation",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().regex(/^[\d\s\-+()]*$/, "Please enter a valid phone number").optional().or(z.literal("")),
  service: z.string().min(1, "Please select a service"),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().min(1, "Please select a time"),
  notes: z.string().max(500, "Notes must be less than 500 characters").optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export const BookingForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const convertTo24Hour = (time12h: string): string => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    
    if (hours === "12") {
      hours = modifier === "AM" ? "00" : "12";
    } else if (modifier === "PM") {
      hours = String(parseInt(hours, 10) + 12);
    }
    
    return `${hours.padStart(2, "0")}:${minutes}:00`;
  };

  const validateForm = (): boolean => {
    try {
      bookingSchema.parse({
        name,
        email,
        phone,
        service: selectedService,
        date: selectedDate,
        time: selectedTime,
        notes,
      });
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please check the form for errors.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("appointments").insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone.trim() || null,
        appointment_date: format(selectedDate!, "yyyy-MM-dd"),
        appointment_time: convertTo24Hour(selectedTime),
        service: selectedService,
        notes: notes.trim() || null,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Appointment Booked!",
        description: "We'll send you a confirmation email shortly.",
      });
    } catch (error: any) {
      toast({
        title: "Booking Failed",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className="elegant-card border-0 overflow-hidden">
        <CardContent className="p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/20 mb-6">
            <CheckCircle2 className="w-10 h-10 text-accent" />
          </div>
          <h2 className="text-3xl font-serif text-primary mb-4">Appointment Confirmed!</h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Thank you for booking with Roy's Company. 
            We've received your appointment request and will contact you shortly to confirm.
          </p>
          <div className="bg-secondary/50 rounded-lg p-6 max-w-sm mx-auto mb-8">
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-accent" />
                <span className="text-foreground">{format(selectedDate!, "EEEE, MMMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-foreground">{selectedTime}</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-accent" />
                <span className="text-foreground">{selectedService}</span>
              </div>
            </div>
          </div>
          <Button 
            onClick={() => {
              setIsSuccess(false);
              setSelectedDate(undefined);
              setSelectedTime("");
              setSelectedService("");
              setName("");
              setEmail("");
              setPhone("");
              setNotes("");
            }}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Book Another Appointment
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="elegant-card border-0 overflow-hidden">
      <CardHeader className="bg-primary text-primary-foreground p-6">
        <CardTitle className="text-2xl font-serif flex items-center gap-3">
          <CalendarDays className="w-6 h-6" />
          Schedule Your Visit
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 lg:p-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Step 1: Select Date and Time */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Calendar */}
            <div>
              <Label className="text-base font-medium text-foreground mb-3 block">
                Select Date
              </Label>
              <div className="border border-border rounded-lg p-4 bg-card">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={(date) => {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);
                    const day = date.getDay();
                    return date < today || day === 0 || day === 6;
                  }}
                  className={cn("p-3 pointer-events-auto")}
                />
              </div>
              {errors.date && (
                <p className="text-destructive text-sm mt-2">{errors.date}</p>
              )}
            </div>

            {/* Time Slots */}
            <div>
              <Label className="text-base font-medium text-foreground mb-3 block">
                Select Time
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelectedTime(time)}
                    className={cn(
                      "py-3 px-2 text-sm rounded-lg border transition-all duration-200",
                      selectedTime === time
                        ? "bg-accent text-accent-foreground border-accent shadow-gold"
                        : "bg-card border-border hover:border-accent hover:bg-accent/5"
                    )}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.time && (
                <p className="text-destructive text-sm mt-2">{errors.time}</p>
              )}
            </div>
          </div>

          {/* Step 2: Select Service */}
          <div>
            <Label className="text-base font-medium text-foreground mb-3 block">
              Select Service
            </Label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger className="w-full h-12">
                <SelectValue placeholder="Choose a service..." />
              </SelectTrigger>
              <SelectContent>
                {services.map((service) => (
                  <SelectItem key={service} value={service}>
                    {service}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && (
              <p className="text-destructive text-sm mt-2">{errors.service}</p>
            )}
          </div>

          {/* Step 3: Contact Information */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif text-primary border-b border-border pb-2">
              Your Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className="h-12"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="h-12"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="phone" className="text-sm font-medium text-foreground mb-2 block">
                <Phone className="w-4 h-4 inline mr-2" />
                Phone Number (Optional)
              </Label>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="(555) 123-4567"
                className="h-12"
              />
              {errors.phone && (
                <p className="text-destructive text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <Label htmlFor="notes" className="text-sm font-medium text-foreground mb-2 block">
                <FileText className="w-4 h-4 inline mr-2" />
                Additional Notes (Optional)
              </Label>
              <Textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any specific concerns or information you'd like us to know..."
                className="min-h-[100px] resize-none"
              />
              {errors.notes && (
                <p className="text-destructive text-sm mt-1">{errors.notes}</p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 text-lg bg-accent hover:bg-accent/90 text-accent-foreground font-medium shadow-gold"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Booking...
              </>
            ) : (
              <>
                <CalendarDays className="w-5 h-5 mr-2" />
                Confirm Appointment
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
