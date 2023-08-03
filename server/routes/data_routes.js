const express = require("express");
const dataRouter = express.Router();
const dataController = require("../controllers/data_controllers");

/**
 * @swagger
 * /api/fuentes:
 *   get:
 *     summary: Get fuentes data
 *     description: Retrieve fuentes data
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               fuentes: [fuentes1, fuentes2, fuentes3]
 */

/**
 * @swagger
 * /api/museos:
 *   get:
 *     summary: Get museos data
 *     description: Retrieve museos data
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               museos: [museo1, museo2, museo3]
 */

/**
 * @swagger
 * /api/oficinas-turismo:
 *   get:
 *     summary: Get oficinas-turismo data
 *     description: Retrieve oficinas-turismo data
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               oficinasTurismo: [oficina1, oficina2, oficina3]
 */

/**
 * @swagger
 * /api/piscinas:
 *   get:
 *     summary: Get piscinas data
 *     description: Retrieve piscinas data
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               piscinas: [piscina1, piscina2, piscina3]
 */

/**
 * @swagger
 * /api/zonas-verdes:
 *   get:
 *     summary: Get zonas-verdes data
 *     description: Retrieve zonas-verdes data
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             example:
 *               zonasVerdes: [zonaVerde1, zonaVerde2, zonaVerde3]
 */

dataRouter.get("/fuentes", dataController.getFuentes);
dataRouter.get("/museos", dataController.getMuseos);
dataRouter.get("/oficinas-turismo", dataController.getOficinas);
dataRouter.get("/piscinas", dataController.getPiscinas);
dataRouter.get("/zonas-verdes", dataController.getZonasVerdes);

module.exports = dataRouter;
