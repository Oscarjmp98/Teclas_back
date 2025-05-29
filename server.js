const express = require("express");
//const conectarDB = require("./config/db");
const mongoose = require('mongoose');
const cors = require("cors");
const teclaRoutes = require("./routes/api");

// Inicializar la aplicación
const app = express();
app.use(express.json());
app.use(cors());

// Conectar a MongoDB
//conectarDB();

// Conexión a MongoDB desde .env
const mongoURI = process.env.MONGO_URI;
const PORT = process.env.PORT || 3000;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch((err) => console.error('❌ Error al conectar a MongoDB:', err));

// Usar las rutas
app.use("/api", teclaRoutes);

// Ruta GET para verificar el despliegue
app.get("/", (req, res) => {
  res.send("🚀 Backend de Oscar (Teclas) desplegado y funcionando correctamente en Vercel! 🔥");
});

// Iniciar el servidor
//const PORT = 5000;
//app.listen(PORT, () => console.log(`🚀 Backend de Oscar (Teclas) corriendo en puerto ${PORT}. Desplegado en Vercel exitosamente! 🔥`));
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

