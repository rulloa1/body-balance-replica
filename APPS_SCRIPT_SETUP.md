# Google Apps Script Setup Guide

To make the contact form work, you need to set up a Google Apps Script that receives the form data and sends you an email.

## Step 1: Create a New Script
1. Go to [script.google.com](https://script.google.com/home).
2. Click **New Project**.
3. Name it "Body Balance Contact Form".

## Step 2: Add the Code
Replace the default code in `Code.gs` with the following:

```javascript
function doPost(e) {
  try {
    // Parse the incoming JSON data
    var data = JSON.parse(e.postData.contents);
    var name = data.name;
    var phone = data.phone;
    var email = data.email;
    var message = data.message;
    
    // Configure email details
    var recipient = "info@bodybalancehealth.net"; // CHANGE THIS to your email
    var subject = "New Contact Form Submission from " + name;
    var body = "You have received a new message from your website contact form.\n\n" +
               "Name: " + name + "\n" +
               "Phone: " + phone + "\n" +
               "Email: " + email + "\n\n" +
               "Message:\n" + message;
    
    // Send the email
    MailApp.sendEmail(recipient, subject, body);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ "result": "success" }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Step 3: Deploy as Web App
1. Click the blue **Deploy** button (top right).
2. Select **New deployment**.
3. Click the **gear icon** next to "Select type" and choose **Web app**.
4. Fill in the details:
   - **Description**: Contact Form Backend
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** (This is important!)
5. Click **Deploy**.
6. You may be asked to authorize the script. Click **Review permissions**, choose your account, click **Advanced**, and then **Go to Body Balance Contact Form (unsafe)** (it is safe, it's your own script).
7. Copy the **Web App URL** (it ends with `/exec`).

## Step 4: Update the React Code
1. Open `src/components/Contact.tsx`.
2. Find the line:
   ```javascript
   const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL";
   ```
3. Replace `"YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL"` with the URL you just copied.

## Testing
1. Go to your website.
2. Fill out the contact form.
3. Click Send.
4. You should receive an email shortly!
