const express = require('express');
const router = express.Router();
const DatosController = require('../controllers/webcontroller');
router.post('/crear',DatosController.datosAgregados);
router.get('/verResultados',DatosController.verRegistros);
router.get('/verReglas/:id',DatosController.verReglas);
module.exports = router;