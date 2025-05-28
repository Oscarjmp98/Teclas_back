const mongoose = require("mongoose");

const conectarDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://OscarJM:bOJkIUGJEzqgS3eq@ganaloco.a1u9b.mongodb.net/Arduino?retryWrites=true&w=majority&appName=GanaLoco', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB conectado ✅");
    } catch (error) {
        console.error("Error al conectar con MongoDB ❌", error);
        process.exit(1); // Terminar proceso en caso de error
    }
};

module.exports = conectarDB;

