const express = require("express");
const router = express.Router();
const User = require("../controllers/users");
const dataController = require("../controllers/data_controllers");

/**
 * @swagger
 * /api/{type}:
 *   get:
 *     summary: Get markers of a specific type
 *     description: Retrieve markers of a specific type
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         description: Type of markers (e.g., fuentes, museos, parks, oficinas-turismo)
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               markers: [marker1, marker2, marker3]
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Get user by ID
 *     description: Retrieve a user by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: false
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               id: "123"
 *               name: "ichigo kurosaki"
 *               email: "ichigokurosaki@gmail.com"
 *
 * @swagger
 * /api/users:
 *   post:
 *     summary: Create a new user
 *     description: Create a new user
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: "User created successfully"
 *
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Delete a user by their ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: false
 *         description: User ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               message: "User deleted successfully"
 */

router.get("/:type", dataController.getMarkers);
router.get("/users/:id?", User.getUser);
router.post("/users", User.createUser);
router.delete("/users/:id?", User.deleteUser);

module.exports = router;
