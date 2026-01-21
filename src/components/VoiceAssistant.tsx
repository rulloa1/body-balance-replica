import { VapiWidget } from '@vapi-ai/client-sdk-react';

const VoiceAssistant = () => {
  return (
    <VapiWidget
      assistantId="6a789161-3269-44a4-b637-06a1afbaf833"
      publicKey="de8271d5-709d-416d-a141-a4afb038b620"
      position="bottom-right"
      offset={{ bottom: '20px', right: '20px' }}
      buttonColor="#3B82F6"
      size="compact" // Fixes the "too big" issue
      assistantOverrides={{
        model: {
          messages: [
            {
              role: "system",
              content: `You are the AI assistant for Body Balance Health. 
              Your goal is to help users book appointments.
              
              If a user calls after hours (5 PM - 9 AM) or if you cannot help them immediately, 
              OFFER to:
              1. Have a human staff member call them back.
              2. Text them a link to book an appointment online.
              
              Collect their name and phone number if they want a callback or text.
              `
            }
          ]
        },
        firstMessage: "Hello! Welcome to Body Balance Health. How can I help you book an appointment today?"
      }}
    />
  );
};

export default VoiceAssistant;
