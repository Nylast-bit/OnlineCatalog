"use server";
import prisma from "../prismaClient";

// VERIFICAR SI UN DISPOSITIVO EXISTE
export async function deviceExists(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const device = await prisma.device.findUnique({
      where: { deviceId: id },
    });
    return device
      ? { success: true, response: device }
      : { success: false, response: "Device not found" };
  } catch (error) {
    console.error("Error checking device existence:", error);
    throw new Error("Error checking device existence.");
  }
}

// CREAR UN NUEVO DISPOSITIVO
export async function createDevice(
  deviceType: string,
  deviceName: string,
  deviceFeatures: string,
  devicePrice: number,
  deviceImage: string,
  description?: string,
  note?: string
) {
  try {
    
 
    const createdDevice = await prisma.device.create({
      data: {
        deviceType,
        deviceName,
        deviceFeatures,
        devicePrice,
        deviceImage,
        description,
        note,
      },
    });
    return { success: true, response: createdDevice };
  } catch (error) {
    console.error("Error creating device:", error);
    throw new Error("Error creating device.");
  }
}

// OBTENER TODOS LOS DISPOSITIVOS
export async function getAllDevices(): Promise<{ success: boolean; response?: any }> {
  try {
    const devices = await prisma.device.findMany();
    return { success: true, response: devices };
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw new Error("Error fetching devices.");
  }
}

// OBTENER UN DISPOSITIVO POR ID
export async function getDeviceById(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const device = await prisma.device.findUnique({
      where: { deviceId: id },
    });
    return device
      ? { success: true, response: device }
      : { success: false, response: "Device not found" };
  } catch (error) {
    console.error("Error fetching device by ID:", error);
    throw new Error("Error fetching device by ID.");
  }
}

// ACTUALIZAR UN DISPOSITIVO
export async function updateDevice(
  id: number,
  data: {
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
      data,
    });
    return { success: true, response: updatedDevice };
  } catch (error) {
    console.error("Error updating device:", error);
    throw new Error("Error updating device.");
  }
}

// ELIMINAR UN DISPOSITIVO
export async function deleteDevice(id: number): Promise<{ success: boolean; response?: any }> {
  try {
    const deletedDevice = await prisma.device.delete({
      where: { deviceId: id },
    });
    return { success: true, response: deletedDevice };
  } catch (error) {
    console.error("Error deleting device:", error);
    throw new Error("Error deleting device.");
  }
}




