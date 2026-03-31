import crypto from 'crypto';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { cartTotal, orderDetails, customerName, customerEmail } = req.body;

    const MW_UUID = process.env.MW_MERCHANT_UUID;
    const MW_API_KEY = process.env.MW_API_KEY;
    const MW_PASSPHRASE = process.env.MW_API_PASSPHRASE;

    if (!MW_UUID || !MW_API_KEY || !MW_PASSPHRASE) {
      console.error("❌ ERROR: Missing API Keys!");
      return res.status(500).json({ success: false, message: "Missing API keys." });
    }

    const formattedAmount = Number(cartTotal).toFixed(2);
    const currency = 'AUD';

    // ---------------------------------------------------------
    // STEP 1: Get Access Token (Using Exact MW Hash Formula)
    // ---------------------------------------------------------
    
    // 1. Hash the passphrase by itself first
    const hashedPassphrase = crypto.createHash('md5').update(MW_PASSPHRASE).digest('hex');
    
    // 2. Concatenate the string
    const tokenString = `${hashedPassphrase}${MW_UUID}${formattedAmount}${currency}`;
    
    // 3. Convert to lowercase and hash the final string
    const tokenHashStr = tokenString.toLowerCase();
    const tokenHash = crypto.createHash('md5').update(tokenHashStr).digest('hex');

    const tokenPayload = new URLSearchParams({
      method: 'getAccessToken',
      merchantUUID: MW_UUID,
      apiKey: MW_API_KEY,
      transactionAmount: formattedAmount,
      transactionCurrency: currency,
      hash: tokenHash
    });

    const tokenResponse = await fetch('https://base.merchantwarrior.com/post/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenPayload.toString()
    });

    const tokenResponseText = await tokenResponse.text();
    console.log("🔍 MW ACCESS TOKEN RESPONSE:", tokenResponseText);

    const tokenMatch = tokenResponseText.match(/<token>(.*?)<\/token>/i);
    
    if (!tokenMatch || !tokenMatch[1]) {
      console.error("❌ Failed to get accessToken. Bank said:", tokenResponseText);
      return res.status(400).json({ success: false, message: "Could not authorize checkout session with the bank." });
    }
    
    const accessToken = tokenMatch[1];

    // ---------------------------------------------------------
    // STEP 2: Generate Form Fields for the Hosted Payment Page
    // ---------------------------------------------------------
    
    // Merchant Warrior strictly requires a public https:// URL to pass validation
    const returnURL = 'https://jess-catering.vercel.app/'; 
    const hashSalt = crypto.randomBytes(6).toString('hex'); 

    // Assuming Web URL Hash follows the exact same logic: MD5( MD5(passphrase) + UUID + returnURL ) -> lowercase -> MD5
    const urlString = `${hashedPassphrase}${MW_UUID}${returnURL}`;
    const urlHashStr = urlString.toLowerCase();
    const urlHash = crypto.createHash('md5').update(urlHashStr).digest('hex');

    return res.status(200).json({
      success: true,
      payPageUrl: 'https://securetest.merchantwarrior.com/', // The NEW secure endpoint
      formFields: {
        method: 'processCard',
        accessToken: accessToken,
        transactionAmount: formattedAmount,
        transactionCurrency: currency,
        transactionProduct: orderDetails || 'Catering Order',
        returnURL: returnURL,
        urlHash: urlHash,
        hashSalt: hashSalt,
        customerName: customerName || '',
        customerEmail: customerEmail || ''
      }
    });

  } catch (error) {
    console.error("❌ Backend Error:", error);
    return res.status(500).json({ success: false, message: "Server error generating secure payload." });
  }
}