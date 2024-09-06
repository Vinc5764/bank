import axios from "axios";


const PAYSTACK_SECRET_KEY = "sk_live_512a229a2addc0fc908de76c760ead1a63c7246d";

export const initializePayment = async (paymentData:any) => {
  const response = await axios.post(
    'https://api.paystack.co/transaction/initialize',
    paymentData,
    {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
      },
    }
  );

  return response.data;
};
export const verifyPayment = async (reference:any) => {

    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );
  
    return response.data;
  };