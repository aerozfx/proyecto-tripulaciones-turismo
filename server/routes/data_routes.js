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
 *               - name: Fountain 1
 *                 coordinates: lat1, lng1
 *                 transporte: Metro
 *                 barrio: Neighborhood 1
 *                 coordenada_x: Coordenada X 1
 *                 coordenada_y: Coordenada Y 1
 *                 latitud: Latitud 1
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
 *               - name: Museum 1
 *                 coordinates: lat1, lng1
 *                 transporte: Bus
 *                 barrio: Neighborhood 2
 *                 coordenada_x: Coordenada X 2
 *                 coordenada_y: Coordenada Y 2
 *                 latitud: Latitud 2
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
 *               - name: Pool 1
 *                 coordinates: lat1, lng1
 *                 transporte: Tram
 *                 barrio: Neighborhood 3
 *                 coordenada_x: Coordenada X 3
 *                 coordenada_y: Coordenada Y 3
 *                 latitud: Latitud 3
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
 *               - name: Green Zone 1
 *                 coordinates: lat1, lng1
 *                 transporte: Train
 *                 barrio: Neighborhood 4
 *                 coordenada_x: Coordenada X 4
 *                 coordenada_y: Coordenada Y 4
 *                 latitud: Latitud 4
 */

dataRouter.get("/fuentes", dataController.getFuentes);
dataRouter.get("/museos", dataController.getMuseos);
dataRouter.get("/piscinas", dataController.getPiscinas);
dataRouter.get("/zonas-verdes", dataController.getZonasVerdes);

module.exports = dataRouter;
