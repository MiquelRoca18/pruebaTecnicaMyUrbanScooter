import { createProductsWorkflow } from "@medusajs/medusa/core-flows"
import { StepResponse } from "@medusajs/framework/workflows-sdk"
import { Modules } from "@medusajs/framework/utils"
import { LinkDefinition } from "@medusajs/framework/types"
import { CATEGORIA_MODULE } from "../../modules/categoria"
import CategoriaModuleService from "../../modules/categoria/service"

createProductsWorkflow.hooks.productsCreated(
  (async ({ products, additional_data }, { container }) => {
    if (!additional_data?.categoria_id) {
      return new StepResponse([], [])
    }

    const categoriaModuleService: CategoriaModuleService = container.resolve(
        CATEGORIA_MODULE
    )

    const link = container.resolve("link")
    const logger = container.resolve("logger")

    // if the categoria doesn't exist, an error is thrown.
    await categoriaModuleService.retrieveCategoria(additional_data.categoria_id as string)

    const links: LinkDefinition[] = []

    for (const product of products) {
      links.push({
        [Modules.PRODUCT]: {
          product_id: product.id,
        },
        [CATEGORIA_MODULE]: {
          categoria_id: additional_data.categoria_id,
        },
      })
    }

    await link.create(links)

    logger.info("Linked categoria to products")

    return new StepResponse(links, links)
  })
)