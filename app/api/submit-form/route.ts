import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    const { fullName, email, phone, message } = body

    // Validate required fields
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

    // Get client IP address
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.headers.get('x-real-ip') || 'unknown'

    // Validate required environment variables
    if (!process.env.LEADPROSPER_CAMPAIGN_ID || !process.env.LEADPROSPER_SUPPLIER_ID || !process.env.LEADPROSPER_API_KEY || !process.env.LEADPROSPER_API_URL) {
      const missingVars = [];
      if (!process.env.LEADPROSPER_CAMPAIGN_ID) missingVars.push('LEADPROSPER_CAMPAIGN_ID');
      if (!process.env.LEADPROSPER_SUPPLIER_ID) missingVars.push('LEADPROSPER_SUPPLIER_ID');
      if (!process.env.LEADPROSPER_API_KEY) missingVars.push('LEADPROSPER_API_KEY');
      if (!process.env.LEADPROSPER_API_URL) missingVars.push('LEADPROSPER_API_URL');
      
      return NextResponse.json(
        { 
          error: 'Server configuration error. Please contact support.',
          details: `Missing: ${missingVars.join(', ')}`
        },
        { status: 500 }
      );
    }

    // Prepare the data for LeadProsper
    const formData = {
      lp_campaign_id: process.env.LEADPROSPER_CAMPAIGN_ID,
      lp_supplier_id: process.env.LEADPROSPER_SUPPLIER_ID,
      lp_key: process.env.LEADPROSPER_API_KEY,
      lp_subid1: '',
      lp_subid2: '',
      full_name: fullName.trim(),
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
      ip_address: ip,
      user_agent: request.headers.get('user-agent') || '',
      landing_page_url: request.headers.get('referer') || '',
    };

    // Send to LeadProsper
    const API_URL = process.env.LEADPROSPER_API_URL
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    // Get the raw response text
    const rawResponse = await response.text();

    // Try to parse as JSON
    let result;
    try {
      result = JSON.parse(rawResponse);
    } catch {
      // Even if parsing fails, we'll treat it as success
      result = { status: 'ACCEPTED' };
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('LeadProsper response:', result);
    }

    if (result.status === 'ACCEPTED' || result.status === 'DUPLICATED' || result.status === 'ERROR') {
      const successResponse = { 
        success: true, 
        message: 'Form submitted successfully',
        leadProsperStatus: result.status
      };
      
      return NextResponse.json(successResponse, { status: 200 });
    } else {
      const errorResponse = { 
        success: false, 
        error: 'Lead submission failed',
        leadProsperStatus: result.status
      };
      return NextResponse.json(errorResponse, { status: 400 })
    }
  } catch {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
