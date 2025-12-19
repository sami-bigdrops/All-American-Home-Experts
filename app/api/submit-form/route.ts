import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import path from 'path'
import fs from 'fs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { fullName, email, phone, message } = body

    if (!fullName || !email || !phone || !message) {
      const missingFields = [];
      if (!fullName) missingFields.push('fullName');
      if (!email) missingFields.push('email');
      if (!phone) missingFields.push('phone');
      if (!message) missingFields.push('message');
      return NextResponse.json(
        { error: 'All required fields are missing', missingFields },
        { status: 400 }
      )
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID

    if (!spreadsheetId) {
      console.error('Missing GOOGLE_SHEETS_SPREADSHEET_ID environment variable')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    let credentials;
    
    if (process.env.GOOGLE_SHEETS_CREDENTIALS) {
      try {
        credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS)
      } catch (error) {
        console.error('Error parsing GOOGLE_SHEETS_CREDENTIALS:', error)
        return NextResponse.json(
          { error: 'Server configuration error' },
          { status: 500 }
        )
      }
    } else {
      const credentialsPath = path.join(process.cwd(), 'credentials', 'service-account.json')
      
      if (!fs.existsSync(credentialsPath)) {
        console.error('Credentials file not found at:', credentialsPath)
        return NextResponse.json(
          { error: 'Server configuration error' },
          { status: 500 }
        )
      }

      credentials = JSON.parse(fs.readFileSync(credentialsPath, 'utf8'))
    }

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    })

    const sheets = google.sheets({ version: 'v4', auth })
    const sheetName = 'All American Home Experts'

    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/New_York',
      dateStyle: 'short',
      timeStyle: 'medium'
    })

    const headerCheck = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: `${sheetName}!A1:E1`,
    })

    if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!A1:E1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [['Timestamp', 'Full Name', 'Email', 'Phone', 'Message']],
        },
      })
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:E`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, fullName.trim(), email.trim(), phone.trim(), message.trim()]],
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
