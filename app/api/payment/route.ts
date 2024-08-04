import { initializePayment } from "@/lib/payment.util";
import { NextRequest, NextResponse } from "next/server";
import Donation from "../model/donation.model";
import User from "../model/user.model";

export const POST = async (req: NextRequest) => {
  try {
    // Parse incoming JSON data from the request body
    const requestData = await req.json();
    const { email, amount, metadata, donorId, userId } = requestData;

    // Validate required fields
    if (!email || !amount) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    // Initialize payment to include both card and mobile money options
    const paymentResponse = await initializePayment({
      email: email,
      amount: amount * 100, // Amount in kobo for Paystack (NGN 50.00)
      metadata: metadata,
      channels: ["card", "mobile_money"], // Include both card and mobile money channels
    });

    const url = "https://www.johnkpikpi.com/sign-in";

    // Check if the payment initialization was successful
    if (!paymentResponse.status) {
      return NextResponse.json(
        { message: "Payment initialization failed" },
        { status: 400 }
      );
    }

    const donation = new Donation({
      amount,
      donor: donorId, // Assuming donorId is passed in the request body
    });

    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    user.donations = user.donations + amount; // Increment the donations field
    await user.save();

    console.log(user);

    // Return the payment URL to the client
    return NextResponse.json({
      message: "Payment initialized successfully",
      url: paymentResponse.data.authorization_url,
      donation,
      user,
    });
  } catch (error) {
    // Handle errors
    console.error("Error initializing payment:", error);
    return NextResponse.json(
      { message: "Failed to initialize payment" },
      { status: 500 }
    );
  }
};
