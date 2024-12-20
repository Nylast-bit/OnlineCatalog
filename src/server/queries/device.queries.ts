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


export async function getAllDevices(): Promise<{ success: boolean; response?: any }> {
  try {
    const devices = await prisma.device.findMany();
    return { success: true, response: devices };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      return { success: false };
    }
  }
}

// READ DEVICE BY ID
export async function getDeviceById(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const device = await prisma.device.findUnique({
      where: { deviceId: id },
    });
    if (device) {
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

// UPDATE DEVICE
export async function updateDevice(
  id: number,
  updatedData: {
    deviceType?: string;
    deviceName?: string;
    deviceFeatures?: string;
    devicePrice?: number;
    deviceImage?: string;
    description?: string;
    note?: string;
  }
): Promise<{ success: boolean; response?: any }> {
  try {
    const updatedDevice = await prisma.device.update({
      where: { deviceId: id },
      data: updatedData,
    });
    return { success: true, response: updatedDevice };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      return { success: false };
    }
  }
}

// DELETE DEVICE
export async function deleteDevice(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const deletedDevice = await prisma.device.delete({
      where: { deviceId: id },
    });
    return { success: true, response: deletedDevice };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      return { success: false };
    }
  }
}

