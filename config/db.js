require("dotenv").config(); // Importar dotenv
const mongoose = require("mongoose");

const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {  // Usar la variable de entorno
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB conectado ✅");
    } catch (error) {
        console.error("Error al conectar con MongoDB ❌", error);
        process.exit(1);
    }
};

module.exports = conectarDB;

