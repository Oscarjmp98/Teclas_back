const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const Tecla = require("../models/Tecla")

// Inicializar la aplicación
const app = express()
app.use(express.json())
app.use(cors())

// Conexión a MongoDB
let isConnected = false

const connectToDatabase = async () => {
  if (isConnected) return

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    isConnected = true
    console.log("✅ Conectado a MongoDB")
  } catch (error) {
    console.error("❌ Error al conectar a MongoDB:", error)
    throw error
  }
}

// Rutas API
app.post("/api/registrar", async (req, res) => {
  try {
    await connectToDatabase()
    const { tecla, fecha_hora } = req.body
    const nuevaTecla = new Tecla({ tecla, fecha_hora })
    await nuevaTecla.save()
    res.json({ mensaje: "Tecla registrada con éxito ✅" })
  } catch (error) {
    res.status(500).json({ error: "Error al registrar tecla ❌" })
  }
})

app.get("/api/datos", async (req, res) => {
  try {
    await connectToDatabase()
    const registros = await Tecla.find().sort({ fecha_hora: -1 })
    res.json(registros)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los registros ❌" })
  }
})

// Ruta principal
app.get("/", (req, res) => {
  res.send("🚀 Backend de Oscar (Teclas) desplegado y funcionando correctamente en Vercel! 🔥")
})

// Exportar la aplicación para serverless
module.exports = app
