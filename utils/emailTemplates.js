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
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 20px auto; background-color: #fff; border: 1px solid #e0e0e0; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px rgba(0,0,0,0.05);">
    
    <!-- Header Section -->
    <div style="background: linear-gradient(135deg, #4A1D6E 0%, #2C1A3E 100%); padding: 40px 30px; text-align: center; color: #fff;">
      <div style="font-size: 32px; font-weight: bold; margin-bottom: 5px; letter-spacing: 1px;">💍 WeddingLawn</div>
      <div style="font-size: 14px; text-transform: uppercase; letter-spacing: 3px; color: #D4A843; font-weight: 600;">Official Payment Receipt</div>
    </div>

    <div style="padding: 40px 30px;">
      <!-- Receipt Info Row -->
      <div style="display: flex; justify-content: space-between; margin-bottom: 40px; border-bottom: 2px solid #f8f9fa; padding-bottom: 20px;">
        <div style="flex: 1;">
          <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold;">Billed To</p>
          <p style="margin: 5px 0 0; font-size: 18px; color: #333; font-weight: 600;">${name}</p>
        </div>
        <div style="flex: 1; text-align: right;">
          <p style="margin: 0; font-size: 12px; color: #999; text-transform: uppercase; font-weight: bold;">Receipt No.</p>
          <p style="margin: 5px 0 0; font-size: 14px; color: #4A1D6E; font-family: 'Courier New', Courier, monospace; font-weight: bold;">#${paymentId.slice(-8).toUpperCase()}</p>
          <p style="margin: 5px 0 0; font-size: 12px; color: #666;">Date: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
        </div>
      </div>

      <!-- Service Details -->
      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 16px; color: #4A1D6E; margin-bottom: 15px; border-left: 4px solid #D4A843; padding-left: 10px;">Booking Summary</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f8f9fa;">
              <th style="text-align: left; padding: 12px 15px; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">Description</th>
              <th style="text-align: right; padding: 12px 15px; border-bottom: 1px solid #eee; font-size: 13px; color: #666;">Event Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding: 15px; border-bottom: 1px solid #eee;">
                <div style="font-weight: 600; color: #333; font-size: 15px;">${lawnName}</div>
                <div style="font-size: 12px; color: #888; margin-top: 4px;">Venue Reservation</div>
              </td>
              <td style="padding: 15px; border-bottom: 1px solid #eee; text-align: right; font-size: 14px; color: #555;">
                ${new Date(eventDate).toDateString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Payment Breakdown -->
      <div style="margin-left: auto; max-width: 300px; background-color: #fdfbf7; border-radius: 12px; padding: 20px; border: 1px solid #f3e8d2;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="font-size: 14px; color: #666;">Total Amount</span>
          <span style="font-size: 14px; color: #333; font-weight: 600;">₹${total.toLocaleString()}</span>
        </div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="font-size: 14px; color: #16A34A; font-weight: 600;">Amount Paid</span>
          <span style="font-size: 14px; color: #16A34A; font-weight: 600;">- ₹${paid.toLocaleString()}</span>
        </div>
        <div style="border-top: 1px dashed #dcdde1; margin: 15px 0; padding-top: 15px; display: flex; justify-content: space-between;">
          <span style="font-size: 16px; color: #333; font-weight: bold;">Balance Due</span>
          <span style="font-size: 18px; color: ${remaining === 0 ? "#16A34A" : "#DC2626"}; font-weight: 800;">₹${remaining.toLocaleString()}</span>
        </div>
      </div>

      <!-- Status Watermark / Badge -->
      <div style="margin-top: 40px; text-align: center;">
        ${remaining === 0 ? `
          <div style="display: inline-block; padding: 10px 30px; border: 3px solid #16A34A; color: #16A34A; font-size: 24px; font-weight: 900; text-transform: uppercase; border-radius: 8px; transform: rotate(-5deg); opacity: 0.8; letter-spacing: 2px;">
            Fully Paid
          </div>
        ` : `
          <div style="display: inline-block; padding: 10px 30px; border: 3px solid #D4A843; color: #D4A843; font-size: 20px; font-weight: 900; text-transform: uppercase; border-radius: 8px; transform: rotate(-3deg); opacity: 0.8; letter-spacing: 1px;">
            Partial Payment
          </div>
        `}
      </div>

      <!-- Transaction Details -->
      <div style="margin-top: 40px; background-color: #f8f9fa; border-radius: 8px; padding: 15px; font-size: 11px; color: #888; border: 1px solid #eee;">
        <div style="margin-bottom: 5px;"><strong>Transaction ID:</strong> ${paymentId}</div>
        <div><strong>Gateway:</strong> Razorpay Secure</div>
        <div style="margin-top: 10px; font-style: italic;">Note: This is an electronically generated receipt and does not require a physical signature.</div>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f1f2f6; padding: 25px 30px; text-align: center;">
      <p style="margin: 0; font-size: 13px; color: #666; line-height: 1.5;">
        Need help with your booking? <br/>
        Contact us at <a href="mailto:support@weddinglawn.com" style="color: #4A1D6E; text-decoration: none; font-weight: bold;">support@weddinglawn.com</a>
      </p>
      <div style="margin-top: 15px; font-size: 11px; color: #aaa;">
        © ${new Date().getFullYear()} WeddingLawn Platform by Abhijit Nikam. All rights reserved.
      </div>
    </div>
  </div>
`;


// ─── Payment notification (to Owner) ──────────────────────
const paymentOwnerNotificationEmail = (ownerName, userName, lawnName, amount, remaining, paymentId) => `
  <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; background-color: #fff; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden;">
    <div style="background-color: #16A34A; padding: 30px; text-align: center; color: #fff;">
      <h1 style="margin: 0; font-size: 24px;">💰 Payment Received!</h1>
      <p style="margin: 5px 0 0; opacity: 0.9;">New transaction for ${lawnName}</p>
    </div>
    <div style="padding: 30px;">
      <h2 style="color: #333; font-size: 18px;">Hi ${ownerName},</h2>
      <p style="color: #555; line-height: 1.6;">
        A payment has been successfully processed for your venue <strong>${lawnName}</strong> from <strong>${userName}</strong>.
      </p>
      
      <div style="background-color: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 20px; margin: 20px 0;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: #166534; font-size: 14px; padding-bottom: 5px;">Amount Credited</td>
            <td style="color: #166534; font-size: 18px; font-weight: bold; text-align: right; padding-bottom: 5px;">₹${amount.toLocaleString()}</td>
          </tr>
          <tr>
            <td style="color: #666; font-size: 14px;">Remaining Balance</td>
            <td style="color: #333; font-size: 14px; text-align: right;">₹${remaining.toLocaleString()}</td>
          </tr>
        </table>
      </div>

      <div style="font-size: 13px; color: #777;">
        <p><strong>Transaction ID:</strong> ${paymentId}</p>
        <p>You can view the full booking details in your owner dashboard.</p>
      </div>

      <div style="text-align: center; margin-top: 30px;">
        <a href="\${process.env.CLIENT_URL}/dashboard/owner" 
           style="display: inline-block; background-color: #4A1D6E; color: #fff; padding: 12px 25px; border-radius: 8px; text-decoration: none; font-weight: 600;">
          Go to Dashboard
        </a>
      </div>
    </div>
    <div style="background-color: #f9f9f9; padding: 15px; text-align: center; font-size: 12px; color: #999; border-top: 1px solid #eee;">
      WeddingLawn — Secured Payment via Razorpay
    </div>
  </div>
`;

module.exports = {
  welcomeEmail,
  passwordResetEmail,
  bookingCreatedEmail,
  bookingConfirmedEmail,
  paymentSuccessEmail,
  paymentOwnerNotificationEmail,
};