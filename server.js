const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");
const teclaRoutes = require("./routes/api");

// Inicializar la aplicación
const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
conectarDB();

// Usar las rutas
app.use("/api", teclaRoutes);

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => console.log(`🔥 Servidor corriendo en puerto ${PORT} 🔥`));

