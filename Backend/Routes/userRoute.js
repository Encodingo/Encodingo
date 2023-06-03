import express from "express";
import { login, logout, register , getMyProfile } from "../Controllers/userController.js";
import { authorizeAdmin, isAuthenticated } from "../middlewares/auth.js";
const router = express.Router();

// register
router.route("/register").post(register);

// login
router.route("/login").post(login);

//logout
router.route("/logout").get(logout);

// my profile
router.route("/me").get(isAuthenticated, getMyProfile);

export default router;
