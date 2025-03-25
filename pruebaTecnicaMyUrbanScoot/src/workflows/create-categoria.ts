import {
    createStep,
    StepResponse,
    createWorkflow,
    WorkflowResponse,
  } from "@medusajs/framework/workflows-sdk"
  import { CATEGORIA_MODULE } from "../modules/categoria"
  import CategoriaModuleService from "../modules/categoria/service"
  
  export type CreateCategoriaStepInput = {
    name: string
  }
  
  export const createCategoriaStep = createStep(
    "create-categoria-step",
    async (input: CreateCategoriaStepInput, { container }) => {
      const categoriaModuleService: CategoriaModuleService = container.resolve(
        CATEGORIA_MODULE
      )
  
      const categoria = await categoriaModuleService.createCategorias(input)
      return new StepResponse(categoria, categoria.id)
    },
    
    async (id: string, { container }) => {
      const categoriaModuleService: CategoriaModuleService = container.resolve(
        CATEGORIA_MODULE
      )
      await categoriaModuleService.deleteCategorias(id)
    }
  )

  type CreateCategoriaWorkflowInput = {
    name: string
  }
  
  export const createCategoriaWorkflow = createWorkflow(
    "create-categoria",
    (input: CreateCategoriaWorkflowInput) => {
      const categoria = createCategoriaStep(input)
  
      return new WorkflowResponse(categoria)
    }
  )
