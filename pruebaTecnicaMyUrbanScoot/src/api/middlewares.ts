import { 
  defineMiddlewares,
  validateAndTransformBody,
} from "@medusajs/framework/http"
import { PostAdminCreateCategoria } from "./admin/categoria/validators"
import { z } from "zod"

export default defineMiddlewares({
  routes: [
    {
      matcher: "/admin/categoria",
      method: "POST",
      middlewares: [
        validateAndTransformBody(PostAdminCreateCategoria),
      ],
    },
    {
      matcher: "/admin/products",
      method: ["POST"],
      additionalDataValidator: {
        cateogria_id: z.string().optional(),
      },
    },

  ],
})