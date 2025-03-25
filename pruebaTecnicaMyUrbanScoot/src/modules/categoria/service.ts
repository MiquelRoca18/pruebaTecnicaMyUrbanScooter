import { MedusaService } from "@medusajs/framework/utils"
import { Categoria } from "./models/categoria"

class CategoriaModuleService extends MedusaService({
    Categoria,
}) {

}

export default CategoriaModuleService