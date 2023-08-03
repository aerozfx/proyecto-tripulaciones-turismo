const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth");
const passport = require("passport");
require("../utils/auth");

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Log in with email and password
 *     description: Authenticate user with email and password
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             email: user@example.com
 *             password: mypassword123
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             example:
 *               message: "Login successful"
 */

/**
 * @swagger
 * /auth/google:
 *   get:
 *     summary: Initiate Google OAuth login
 *     description: Initiate Google OAuth login process
 *     responses:
 *       200:
 *         description: Redirects to Google OAuth consent screen
 */

/**
 * @swagger
 * /auth/google/callback:
 *   get:
 *     summary: Google OAuth callback
 *     description: Callback after successful Google OAuth login
 *     responses:
 *       200:
 *         description: Successful Google OAuth login
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Sign up a new user
 *     description: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: Renji
 *             email: Renji@outlook.com
 *             password: mypassword123
 *     responses:
 *       200:
 *         description: Successful signup
 *         content:
 *           application/json:
 *             example:
 *               message: "User signed up successfully"
 */

authRouter.post("/login", authController.checkEmailLogIn);
authRouter.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
    prompt: "select_account",
  })
);
authRouter.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  authController.googleLogin
);
authRouter.post("/signup", authController.signUpUser);

module.exports = authRouter;
