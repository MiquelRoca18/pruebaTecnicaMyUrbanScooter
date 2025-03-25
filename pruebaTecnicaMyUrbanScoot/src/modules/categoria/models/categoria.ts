import { model } from "@medusajs/framework/utils"

export const Categoria = model.define("categoria", {
  id: model.id().primaryKey(),
  name: model.text(),
})