// This is a Google Apps Script for Google Sheets
// 1. Go to https://script.google.com
// 2. Create a new project
// 3. Paste this code
// 4. Deploy as Web App (Execute as: your email, Anyone can access)
// 5. Copy the deployment URL to VITE_GOOGLE_SHEETS_WEBHOOK in .env.local

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Get the active spreadsheet - change "Contact Submissions" to your sheet name
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

function doOptions(e) {
  var output = ContentService.createTextOutput();
  output.setMimeType(ContentService.MimeType.JSON);
  output.append(JSON.stringify({ status: 'ok' }));
  
  var headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
  
  for (var header in headers) {
    output.setHeader(header, headers[header]);
  }
  
  return output;
}
