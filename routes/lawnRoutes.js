const express = require("express");
const router  = express.Router();

const { protect, authorizeRoles } = require("../middleware/authMiddleware");
const validate                    = require("../middleware/validate");
const { lawnSchema, lawnUpdateSchema } = require("../middleware/validators/lawnValidator");
const {
  getAllLawns,
  getLawnById,
  createLawn,
  updateLawn,
  deleteLawn,
  getMyLawns,
  getPendingLawns,
  approveLawn,
  unapproveLawn,
  getRejectedLawns,
  rejectLawn,
} = require("../controllers/lawnController");

// ── Public ────────────────────────────────────────────────
router.get("/",    getAllLawns);
router.get("/:id", getLawnById);

// ── Owner ─────────────────────────────────────────────────
router.get(
  "/owner/my-lawns",
  protect,
  authorizeRoles("owner"),
  getMyLawns
);
router.post(
  "/",
  protect,
  authorizeRoles("owner"),
  validate(lawnSchema),
  createLawn
);
router.put(
  "/:id",
  protect,
  authorizeRoles("owner"),
  validate(lawnUpdateSchema),
  updateLawn
);
router.delete(
  "/:id",
  protect,
  authorizeRoles("owner", "admin"),
  deleteLawn
);

// ── Admin ─────────────────────────────────────────────────
router.get(
  "/admin/pending",
  protect,
  authorizeRoles("admin"),
  getPendingLawns
);
router.get(
  "/admin/rejected",
  protect,
  authorizeRoles("admin"),
  getRejectedLawns
);
router.put(
  "/admin/:id/approve",
  protect,
  authorizeRoles("admin"),
  approveLawn
);
router.put(
  "/admin/:id/unapprove",
  protect,
  authorizeRoles("admin"),
  unapproveLawn
);
router.put(
  "/admin/:id/reject",
  protect,
  authorizeRoles("admin"),
  rejectLawn
);

module.exports = router;