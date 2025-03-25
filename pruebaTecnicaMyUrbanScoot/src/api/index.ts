import express from "express"
import cors from "cors"
import { loadConfig } from "@medusajs/config"
import { MedusaApp } from "@medusajs/app"
import { MedusaAppOutput } from "@medusajs/types"
import { loaders } from "@medusajs/medusa/dist/loaders"
import { registerModules } from "@medusajs/modules-sdk"
import storeRoutes from "./store"

const app = express()

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}))

const configModule = loadConfig()

const container = loaders({
  configModule,
  expressApp: app,
})

registerModules({
  container,
  configModule,
})

// Registrar las rutas del store
storeRoutes(app)

const medusaApp = new MedusaApp({
  container,
  configModule,
})

export const medusaAppOutput: MedusaAppOutput = medusaApp.build() 