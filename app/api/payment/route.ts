import { initializePayment } from "@/lib/payment.util";
import { NextRequest, NextResponse } from "next/server";
import Donation from "../model/donation.model";
import User from "../model/user.model";
import { connectToDB } from "@/lib/connect";

export const POST = async (req: NextRequest) => {
  await connectToDB();
  try {
    // Parse incoming JSON data from the request body
    const requestData = await req.json();
    const { email, amount, currency, metadata, donorId, userId } = requestData;

    // Validate required fields
    if (!email || !amount ) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Convert amount to smallest unit depending on the currency
    let convertedAmount;
    switch (currency.toUpperCase()) {
      case "GHS": // Ghanaian Cedis
        convertedAmount = amount * 100; // Convert GHS to pesewas
        break;
      case "USD": // US Dollars
        convertedAmount = amount *16* 100; // Convert USD to cents
        break;
      default: // Default for unsupported currencies or NGN (Nigerian Naira)
        return NextResponse.json(
          { message: "Unsupported currency" },
          { status: 400 }
        );
    }

    // Initialize payment with currency-specific amount
    const paymentResponse = await initializePayment({
      email: email,
      amount: convertedAmount, // Amount in smallest unit for the currency
      currency: "GHS", // Use the currency passed by the user (GHS, USD, etc.)
      metadata: metadata,
      channels: ["card", "mobile_money"], // Include both card and mobile money channels
    });

    // Check if the payment initialization was successful
    if (!paymentResponse.status) {
      return NextResponse.json(
        { message: "Payment initialization failed" },
        { status: 400 }
      );
    }

    // Create a donation record
    const donation = new Donation({
      amount,
      donor: donorId, // Assuming donorId is passed in the request body
    });
    await donation.save(); // Save the donation to the database
 console.log(donation);
 
    // Find and update the user's donation total
    // const user = await User.findById(userId);
    // if (!user) {
    //   return NextResponse.json({ message: "User not found" }, { status: 404 });
    // }

    // Safely increment the donations field
  //   if (user) {
  //     user.donations = (user.donations || 0) + amount;
  //     await user.save();

  //  }
  //   console.log(user);

    // Return the payment URL to the client
    return NextResponse.json({
      message: "Payment initialized successfully",
      url: paymentResponse.data.authorization_url,
      donation,

     
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
