import { Module } from "@medusajs/framework/utils"
import CategoriaModuleService from "./service"

export const CATEGORIA_MODULE = "categoria"

export default Module(CATEGORIA_MODULE, {
  service: CategoriaModuleService,
})