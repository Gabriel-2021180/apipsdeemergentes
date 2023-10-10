const express = require('express');
const router = express.Router();
const DatosController = require('../controllers/webcontroller');
router.post('/crear',DatosController.datosAgregados);

module.exports = router;