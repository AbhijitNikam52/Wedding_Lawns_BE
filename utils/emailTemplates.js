/**
 * All HTML email templates for WeddingLawn platform
 * Each function returns an HTML string
 */

// ─── Welcome email after registration ────────────────────
const welcomeEmail = (name) => `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e9d5ff;border-radius:12px;overflow:hidden;">
    <div style="background:#4A1D6E;padding:32px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:28px;">💍 WeddingLawn</h1>
      <p style="color:#D4A843;margin:8px 0 0;">Book Your Dream Venue</p>
    </div>
    <div style="padding:32px;">
      <h2 style="color:#2C1A3E;">Welcome, ${name}! 🎉</h2>
      <p style="color:#555;line-height:1.6;">
        Your account has been created successfully. You can now browse beautiful wedding lawns,
        check availability, chat with owners, and make secure bookings.
      </p>
      <a href="${process.env.CLIENT_URL}" 
         style="display:inline-block;background:#7B2D8B;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold;margin-top:16px;">
        Browse Lawns →
      </a>
    </div>
    <div style="background:#f9f3ff;padding:16px;text-align:center;">
      <p style="color:#999;font-size:12px;margin:0;">© ${new Date().getFullYear()} WeddingLawn. All rights reserved.</p>
    </div>
  </div>
`;

// ─── Password reset email ─────────────────────────────────
const passwordResetEmail = (name, resetUrl) => `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e9d5ff;border-radius:12px;overflow:hidden;">
    <div style="background:#4A1D6E;padding:32px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:28px;">💍 WeddingLawn</h1>
    </div>
    <div style="padding:32px;">
      <h2 style="color:#2C1A3E;">Password Reset Request</h2>
      <p style="color:#555;line-height:1.6;">Hi ${name},</p>
      <p style="color:#555;line-height:1.6;">
        We received a request to reset your password. Click the button below to set a new password.
        This link is valid for <strong>15 minutes</strong>.
      </p>
      <a href="${resetUrl}"
         style="display:inline-block;background:#DC2626;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold;margin-top:16px;">
        Reset Password →
      </a>
      <p style="color:#999;font-size:13px;margin-top:24px;">
        If you did not request this, please ignore this email. Your password will remain unchanged.
      </p>
    </div>
    <div style="background:#f9f3ff;padding:16px;text-align:center;">
      <p style="color:#999;font-size:12px;margin:0;">© ${new Date().getFullYear()} WeddingLawn. All rights reserved.</p>
    </div>
  </div>
`;

// ─── Booking created email (to user) ─────────────────────
const bookingCreatedEmail = (name, lawnName, eventDate, amount) => `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e9d5ff;border-radius:12px;overflow:hidden;">
    <div style="background:#4A1D6E;padding:32px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:28px;">💍 WeddingLawn</h1>
    </div>
    <div style="padding:32px;">
      <h2 style="color:#2C1A3E;">Booking Request Sent! 📅</h2>
      <p style="color:#555;line-height:1.6;">Hi ${name},</p>
      <p style="color:#555;line-height:1.6;">Your booking request has been sent to the lawn owner. Here are your details:</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <tr style="background:#f9f3ff;">
          <td style="padding:10px 16px;font-weight:bold;color:#4A1D6E;border:1px solid #e9d5ff;">Lawn</td>
          <td style="padding:10px 16px;color:#555;border:1px solid #e9d5ff;">${lawnName}</td>
        </tr>
        <tr>
          <td style="padding:10px 16px;font-weight:bold;color:#4A1D6E;border:1px solid #e9d5ff;">Event Date</td>
          <td style="padding:10px 16px;color:#555;border:1px solid #e9d5ff;">${new Date(eventDate).toDateString()}</td>
        </tr>
        <tr style="background:#f9f3ff;">
          <td style="padding:10px 16px;font-weight:bold;color:#4A1D6E;border:1px solid #e9d5ff;">Total Amount</td>
          <td style="padding:10px 16px;color:#555;border:1px solid #e9d5ff;">₹${amount.toLocaleString()}</td>
        </tr>
        <tr>
          <td style="padding:10px 16px;font-weight:bold;color:#4A1D6E;border:1px solid #e9d5ff;">Status</td>
          <td style="padding:10px 16px;color:#D97706;font-weight:bold;border:1px solid #e9d5ff;">Pending Owner Confirmation</td>
        </tr>
      </table>
      <p style="color:#555;font-size:13px;margin-top:16px;">You will be notified once the owner responds.</p>
    </div>
    <div style="background:#f9f3ff;padding:16px;text-align:center;">
      <p style="color:#999;font-size:12px;margin:0;">© ${new Date().getFullYear()} WeddingLawn. All rights reserved.</p>
    </div>
  </div>
`;

// ─── Booking confirmed email (to user) ───────────────────
const bookingConfirmedEmail = (name, lawnName, eventDate) => `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e9d5ff;border-radius:12px;overflow:hidden;">
    <div style="background:#16A34A;padding:32px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:28px;">✅ Booking Confirmed!</h1>
    </div>
    <div style="padding:32px;">
      <p style="color:#555;line-height:1.6;">Hi ${name},</p>
      <p style="color:#555;line-height:1.6;">
        Great news! Your booking for <strong>${lawnName}</strong> on 
        <strong>${new Date(eventDate).toDateString()}</strong> has been confirmed by the owner.
      </p>
      <p style="color:#555;line-height:1.6;">Please complete your payment to finalize the booking.</p>
      <a href="${process.env.CLIENT_URL}/bookings/my"
         style="display:inline-block;background:#7B2D8B;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:bold;margin-top:16px;">
        Pay Now →
      </a>
    </div>
    <div style="background:#f9f3ff;padding:16px;text-align:center;">
      <p style="color:#999;font-size:12px;margin:0;">© ${new Date().getFullYear()} WeddingLawn. All rights reserved.</p>
    </div>
  </div>
`;

// ─── Payment success email (Receipt) ──────────────────────
const paymentSuccessEmail = (name, lawnName, eventDate, total, paid, remaining, paymentId) => `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;border:1px solid #e9d5ff;border-radius:12px;overflow:hidden;">
    <div style="background:#1D4ED8;padding:32px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:28px;">💳 Payment Receipt</h1>
      <p style="color:#BFDBFE;margin:8px 0 0;">Thank you for your payment!</p>
    </div>
    <div style="padding:32px;">
      <p style="color:#555;line-height:1.6;">Hi ${name},</p>
      <p style="color:#555;line-height:1.6;">We have received your payment for <strong>${lawnName}</strong>. Here is your transaction summary:</p>
      
      <div style="background:#f9f3ff;border-radius:8px;padding:24px;margin-top:20px;border:1px solid #e9d5ff;">
        <table style="width:100%;border-collapse:collapse;">
          <tr>
            <td style="padding:8px 0;color:#666;font-size:14px;">Total Amount</td>
            <td style="padding:8px 0;color:#333;font-weight:bold;text-align:right;">₹${total.toLocaleString()}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#16A34A;font-size:14px;font-weight:bold;">Amount Just Paid</td>
            <td style="padding:8px 0;color:#16A34A;font-weight:bold;text-align:right;">₹${paid.toLocaleString()}</td>
          </tr>
          <tr style="border-top:1px solid #e9d5ff;">
            <td style="padding:12px 0 8px;color:#666;font-size:14px;font-weight:bold;">Remaining Balance</td>
            <td style="padding:12px 0 8px;color:#DC2626;font-weight:bold;text-align:right;font-size:18px;">₹${remaining.toLocaleString()}</td>
          </tr>
        </table>
      </div>

      <table style="width:100%;border-collapse:collapse;margin-top:24px;">
        <tr style="background:#f9fafb;">
          <td style="padding:10px 16px;font-weight:bold;color:#4A1D6E;border:1px solid #e5e7eb;font-size:13px;">Event Date</td>
          <td style="padding:10px 16px;color:#555;border:1px solid #e5e7eb;font-size:13px;">${new Date(eventDate).toDateString()}</td>
        </tr>
        <tr>
          <td style="padding:10px 16px;font-weight:bold;color:#4A1D6E;border:1px solid #e5e7eb;font-size:13px;">Payment Status</td>
          <td style="padding:10px 16px;color:${remaining === 0 ? "#16A34A" : "#D97706"};font-weight:bold;border:1px solid #e5e7eb;font-size:13px;">
            ${remaining === 0 ? "FULL PAYMENT DONE" : "ADVANCE PAID / PARTIAL"}
          </td>
        </tr>
        <tr style="background:#f9fafb;">
          <td style="padding:10px 16px;font-weight:bold;color:#4A1D6E;border:1px solid #e5e7eb;font-size:13px;">Transaction ID</td>
          <td style="padding:10px 16px;color:#555;border:1px solid #e5e7eb;font-size:11px;font-family:monospace;">${paymentId}</td>
        </tr>
      </table>

      ${remaining > 0 ? `
        <div style="margin-top:24px;text-align:center;">
          <p style="color:#666;font-size:14px;">Please remember to pay the remaining balance before the event date.</p>
          <a href="${process.env.CLIENT_URL}/bookings/my" 
             style="display:inline-block;background:#7B2D8B;color:#fff;padding:10px 20px;border-radius:6px;text-decoration:none;font-weight:bold;font-size:14px;margin-top:10px;">
            View Booking Details
          </a>
        </div>
      ` : `
        <div style="margin-top:24px;text-align:center;">
          <p style="color:#16A34A;font-weight:bold;">Your booking is now fully paid! 🎉</p>
        </div>
      `}
    </div>
    <div style="background:#f9f3ff;padding:16px;text-align:center;">
      <p style="color:#999;font-size:12px;margin:0;">© ${new Date().getFullYear()} WeddingLawn. All rights reserved.</p>
    </div>
  </div>
`;

module.exports = {
  welcomeEmail,
  passwordResetEmail,
  bookingCreatedEmail,
  bookingConfirmedEmail,
  paymentSuccessEmail,
};