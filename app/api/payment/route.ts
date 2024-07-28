import { initializePayment } from '@/lib/payment.util';
import { NextRequest, NextResponse } from 'next/server';


export const POST = async (req: NextRequest) => {
  try {
    // Parse incoming JSON data from the request body
    const requestData = await req.json();
    const { email, amount, metadata } = requestData;

    // Validate required fields
    if (!email || !amount  ) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Initialize payment to include both card and mobile money options
    const paymentResponse = await initializePayment({
      email: email,
      amount: amount * 100, // Amount in kobo for Paystack (NGN 50.00)
      metadata: metadata,
      channels: ['card', 'mobile_money'], // Include both card and mobile money channels
    });

    // Check if the payment initialization was successful
    if (!paymentResponse.status) {
      return NextResponse.json({ message: 'Payment initialization failed' }, { status: 400 });
    }

    // Return the payment URL to the client
    return NextResponse.json({ message: 'Payment initialized successfully', url: paymentResponse.data.authorization_url });
  } catch (error) {
    // Handle errors
    console.error('Error initializing payment:', error);
    return NextResponse.json({ message: 'Failed to initialize payment' }, { status: 500 });
  }
};
