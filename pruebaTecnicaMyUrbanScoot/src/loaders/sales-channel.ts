import { SalesChannelService } from "@medusajs/medusa";
import { MedusaContainer } from "@medusajs/medusa/dist/types/global";

export default async function createDefaultSalesChannel(
  container: MedusaContainer
): Promise<void> {
  const salesChannelService: SalesChannelService = container.resolve(
    "salesChannelService"
  );

  try {
    const salesChannels = await salesChannelService.list({});
    
    if (salesChannels.length === 0) {
      await salesChannelService.create({
        name: "Default Sales Channel",
        description: "Default sales channel for MyUrbanScoot",
        is_disabled: false,
      });
      console.log("Default sales channel created");
    }
  } catch (error) {
    console.error("Error creating default sales channel:", error);
  }
} 