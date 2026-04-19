const TelegramBot = require('node-telegram-bot-api');

// Retrieve tokens from environment variables
const token = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHANNEL_ID; 

let bot = null;

if (token) {
  // Initialize the bot without polling, as we only need to send messages
  bot = new TelegramBot(token, { polling: false });
  console.log("✅ Telegram Bot initialized");
} else {
  console.log("⚠️ Telegram Bot not initialized. TELEGRAM_BOT_TOKEN is missing.");
}

/**
 * Sends a message to the configured Telegram channel when a new lawn is approved.
 * @param {Object} lawn - The lawn object from the database.
 */
const sendLawnApprovalNotification = async (lawn) => {
  if (!bot || !chatId) {
     console.log("⚠️ Cannot send telegram message: Bot or Channel ID not configured.");
     return;
  }

  try {
    const clientUrl = process.env.CLIENT_URL || 'http://localhost:5173';
    const lawnUrl = `${clientUrl}/lawns/${lawn._id}`;
    
    // Format the message with HTML
    const message = `
🎉 <b>New Lawn Approved & Live!</b> 🎉

<b>Name</b>: ${lawn.name}
<b>City</b>: ${lawn.city}
<b>Capacity</b>: Up to ${lawn.capacity} guests
<b>Price/Day</b>: ₹${lawn.pricePerDay}

${lawn.description ? `<b>Description</b>: ${lawn.description.substring(0, 150)}...\n` : ''}
📍 <b>Address</b>: ${lawn.address}

👉 <a href="${lawnUrl}">Click here to book now!</a>
`;

    await bot.sendMessage(chatId, message, { parse_mode: 'HTML' });
    console.log(`✅ Telegram notification sent for lawn: ${lawn.name}`);
  } catch (error) {
    console.error("❌ Error sending telegram message:", error.message);
  }
};

module.exports = {
  sendLawnApprovalNotification
};
