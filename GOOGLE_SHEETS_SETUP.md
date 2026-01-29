# Google Sheets Integration - Step by Step Guide

## Step 1: Create a Google Sheet

1. Go to https://sheets.google.com
2. Click **+ Create new spreadsheet**
3. Name it: `Blue Santos Contact Submissions`
4. You'll see an empty sheet

## Step 2: Create Google Apps Script

1. In your Google Sheet, go to **Extensions** → **Apps Script**
2. Delete all the existing code and paste this:

```javascript
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    const sheet = SpreadsheetApp.getActiveSheet();
    
    // Add headers if first row is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Timestamp",
        "First Name",
        "Last Name",
        "Email",
        "Company",
        "Message"
      ]);
    }
    
    // Add new row with form data
    sheet.appendRow([
      data.timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.company,
      data.message
    ]);
    
    return ContentService.createTextOutput(
      JSON.stringify({ success: true })
    ).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. Click **Save** (give it any name, like "Contact Form Handler")

## Step 3: Deploy the Script

1. Click **Deploy** button (top right)
2. Click **New Deployment** 
3. Choose **Type**: Select "Web app"
4. **Execute as**: Select your email (the one logged in)
5. **Who has access**: Select "Anyone"
6. Click **Deploy**
7. A popup will appear - Click **Authorize** and select your Google Account
8. Copy the **Deployment URL** - it looks like:
   ```
   https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercontent
   ```

## Step 4: Add the Webhook URL to Your Project

1. Open `.env.local` in your project
2. Add this line:
   ```
   VITE_GOOGLE_SHEETS_WEBHOOK=https://script.google.com/macros/d/YOUR_SCRIPT_ID/usercontent
   ```
   (Replace with your actual URL from Step 3)

3. Save the file

## Step 5: Test It

1. Run `npm run dev`
2. Go to the contact form
3. Fill it out and click "Send Message"
4. Go back to your Google Sheet - you should see a new row with the data!

## Troubleshooting

**If it's not working:**

1. Check browser console (F12) for errors
2. Make sure the webhook URL in `.env.local` is correct
3. Make sure you deployed the script as "Anyone can access"
4. Restart your dev server after changing `.env.local`

**To edit the script later:**
- Go to your Google Sheet → Extensions → Apps Script → find your script
- Make changes and click Deploy → Select your deployment → Update

That's it! Now your contact form data goes to both your email and Google Sheets.
