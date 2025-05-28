const express = require("express");
const { registrarTecla, obtenerTeclas } = require("../controllers/teclaController");

const router = express.Router();

router.post("/registrar", registrarTecla);
router.get("/datos", obtenerTeclas);

module.exports = router;
