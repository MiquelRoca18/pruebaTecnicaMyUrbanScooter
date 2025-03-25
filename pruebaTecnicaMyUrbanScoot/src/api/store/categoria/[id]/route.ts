import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const query = req.scope.resolve("query")
  
  const { data: categoria } = await query.graph({
    entity: "categoria",
    fields: ["*", "products.*"],
    where: { id: req.params.id }
  })

  res.json({ categoria: categoria[0] })
} 