// api/checkout.js

export default async function handler(req, res) {
  // We only want to accept POST requests (since we are sending secure data)
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    // 1. Get the cart details sent from your React frontend
    const { cartTotal, orderDetails } = req.body;

    // 2. Securely access your Merchant Warrior keys from your .env file
    // (These are completely hidden from the browser/frontend)
    const MW_UUID = process.env.MW_MERCHANT_UUID;
    const MW_API_KEY = process.env.MW_API_KEY;

    console.log(`Processing $${cartTotal} payment... using UUID: ${MW_UUID}`);

    // 3. MOCK PAYMENT GATEWAY DELAY
    // We are pretending to talk to Merchant Warrior here. It waits 2 seconds.
    // Once they give you the API keys, we will replace this Promise with the actual Merchant Warrior API call.
    await new Promise((resolve) => setTimeout(resolve, 2000)); 

    // 4. Send a success response back to React!
    return res.status(200).json({
      success: true,
      message: "Payment successfully authorized by Merchant Warrior sandbox.",
      transactionId: "MW-TEST-987654321"
    });

  } catch (error) {
    console.error("Payment processing error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "An error occurred while processing the payment." 
    });
  }
}