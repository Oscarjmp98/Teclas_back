const mongoose = require("mongoose");

const TeclaSchema = new mongoose.Schema({
    tecla: { type: String, required: true },
    fecha_hora: { type: String, required: true }
});

module.exports = mongoose.model("Tecla", TeclaSchema);
