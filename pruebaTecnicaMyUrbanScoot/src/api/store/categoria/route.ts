import { MedusaRequest, MedusaResponse } from "@medusajs/medusa"

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const query = req.scope.resolve("query")
  
  const { data: categoria } = await query.graph({
    entity: "categoria",
    fields: ["*", "products.*"],
  })

  res.json({ categoria })
} 