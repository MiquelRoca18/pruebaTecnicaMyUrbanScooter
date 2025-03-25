import {
    MedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
  import { 
    createCategoriaWorkflow,
  } from "../../../workflows/create-categoria"
  
  import { z } from "zod"
  import { PostAdminCreateCategoria } from "./validators"
  
  type PostAdminCreateCategoriaType = z.infer<typeof PostAdminCreateCategoria>
  
  
  export const POST = async (
    req: MedusaRequest<PostAdminCreateCategoriaType>,
    res: MedusaResponse
  ) => {
    const { result } = await createCategoriaWorkflow(req.scope)
      .run({
        input: req.body,
      })
  
    res.json({ categoria: result })
  }

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