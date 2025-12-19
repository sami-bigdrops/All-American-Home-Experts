import { NextRequest, NextResponse } from 'next/server'
import { google } from 'googleapis'
import path from 'path'
import fs from 'fs'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
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
      range: `${sheetName}!J1:K1`,
    })

    if (!headerCheck.data.values || headerCheck.data.values.length === 0 || !headerCheck.data.values[0] || headerCheck.data.values[0].length < 2) {
      await sheets.spreadsheets.values.update({
        spreadsheetId,
        range: `${sheetName}!J1:K1`,
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [['Timestamp', 'Unsubscribe']],
        },
      })
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!J:K`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, email.trim()]],
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Successfully unsubscribed from our newsletter.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error unsubscribing:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

