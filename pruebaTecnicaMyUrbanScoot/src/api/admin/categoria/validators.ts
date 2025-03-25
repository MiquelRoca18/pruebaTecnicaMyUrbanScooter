import { z } from "zod"

export const PostAdminCreateCategoria = z.object({
  name: z.string(),
})