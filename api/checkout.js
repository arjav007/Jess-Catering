import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { cartTotal, orderDetails, customerName, customerEmail } = req.body;

    const MW_UUID = process.env.MW_MERCHANT_UUID;
    const MW_PASSPHRASE = process.env.MW_API_PASSPHRASE;

    if (!MW_UUID || !MW_PASSPHRASE) {
      console.error("❌ ERROR: Missing API Keys!");
      return res.status(500).json({ success: false, message: "Missing API keys." });
    }

    const formattedAmount = Number(cartTotal).toFixed(2);

    // Create the secure Hash so Merchant Warrior knows the price wasn't tampered with
    const stringToHash = `${MW_UUID}${MW_PASSPHRASE}${formattedAmount}`;
    const securityHash = crypto.createHash('md5').update(stringToHash).digest('hex');

    // Dynamically grab the website URL (works for localhost AND live Vercel)
    const appUrl = req.headers.origin || 'https://jess-catering.vercel.app'; 

    // Return the exact fields the frontend needs to build the secure checkout form
    return res.status(200).json({
      success: true,
      payPageUrl: 'https://base.merchantwarrior.com/pay/',
      formFields: {
        merchantUUID: MW_UUID,
        transactionAmount: formattedAmount,
        transactionCurrency: 'AUD',
        transactionProduct: orderDetails || 'Catering Order',
        customerName: customerName || '',
        customerEmail: customerEmail || '',
        hash: securityHash,
        returnURL: appUrl // <--- THIS WILL NOW SWITCH AUTOMATICALLY
      }
    });

  } catch (error) {
    console.error("❌ Backend Error:", error);
    return res.status(500).json({ success: false, message: "Server error generating secure payload." });
  }
}