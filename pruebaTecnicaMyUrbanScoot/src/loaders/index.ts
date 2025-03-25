import { MedusaContainer } from "@medusajs/medusa/dist/types/global";
import createDefaultSalesChannel from "./sales-channel";

export default async function (container: MedusaContainer): Promise<void> {
  await createDefaultSalesChannel(container);
} 