"use server";
import prisma from "../prismaClient";

// DEVICE EXISTS
export async function deviceExists(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const device = await prisma.device.findFirst({
      where: {
        deviceId: id
      },
    });
    if (device) {
      console.log(device)
      return { success: true, response: device };
    } else {
      return { success: false };
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      return { success: false };
    }
  }
}

export async function createDevice(
  deviceType: String,
  deviceName: String,
  deviceFeatures: String,
  devicePrice: Number,
  deviceImage: String
) {
  try {
    

    const createdDevice = await prisma.device.create({
      data: {
        deviceType: deviceType.toString(),
        deviceName: deviceName.toString(),
        deviceFeatures: deviceFeatures.toString(),
        devicePrice: (devicePrice as number),
        deviceImage: deviceImage.toString(),
      },
            
    
    });

    return { success: true, response: createdDevice };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
}