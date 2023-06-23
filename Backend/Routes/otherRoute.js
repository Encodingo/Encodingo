import express from "express";
import { contact } from "../Controllers/otherController.js";

const router = express.Router();

// contact / subscribe
router.route("/contact").post(contact);

export default router;
