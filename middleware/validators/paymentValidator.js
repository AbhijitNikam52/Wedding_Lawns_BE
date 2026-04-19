const Joi = require("joi");

// ─── Create Razorpay order ────────────────────────────────
const createOrderSchema = Joi.object({
  bookingId: Joi.string().required().messages({
    "any.required": "bookingId is required",
  }),
  amount: Joi.number().optional().min(1),
});

// ─── Verify payment signature ─────────────────────────────
const verifyPaymentSchema = Joi.object({
  bookingId:          Joi.string().required(),
  razorpayOrderId:    Joi.string().required(),
  razorpayPaymentId:  Joi.string().required(),
  razorpaySignature:  Joi.string().required(),
});

module.exports = { createOrderSchema, verifyPaymentSchema };