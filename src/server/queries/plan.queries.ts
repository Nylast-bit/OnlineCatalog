"use server";
import prisma from "../prismaClient";

// plan EXISTS
export async function planExists(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const plan = await prisma.plan.findFirst({
      where: {
        planId: id
      },
    });
    if (plan) {
      console.log(plan)
      return { success: true, response: plan };
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

// Creare plam

export async function createPlan(
  planType: String,
  planName: String,
  planFeatures: String,
  planPrice: Number,
  planImage: String,
  planDescription: String,
  notes: String

) {
  try {
    

    const createdPlan = await prisma.plan.create({
      data: {
        planType: planType.toString(),
        planName: planName.toString(),
        planFeatures: planFeatures.toString(),
        planPrice: (planPrice as number),
        planImage: planImage.toString(),
        description: planDescription.toString(),
        note: notes.toString(),
      },
            
    
    });

    return { success: true, response: createdPlan };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
}

export async function getPlanById(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const plan = await prisma.plan.findUnique({
      where: { planId: id },
    });
    return plan
      ? { success: true, response: plan }
      : { success: false, response: "Plan not found" };
  } catch (error) {
    console.error("Error fetching plan by ID:", error);
    throw new Error("Error fetching plan by ID.");
  }
}

export async function getAllPlans(): Promise<{ success: boolean; response?: any }> {
  try {
    const plans = await prisma.plan.findMany();
    return { success: true, response: plans };
  } catch (error) {
    console.error("Error fetching all plans:", error);
    throw new Error("Error fetching all plans.");
  }
}

export async function updatePlan(
  id: number,
  updatedData: {
    planType?: string;
    planName?: string;
    planFeatures?: string;
    planPrice?: number;
    planImage?: string;
    description?: string;
    note?: string;
  }
): Promise<{ success: boolean; response?: any }> {
  try {
    const updatedPlan = await prisma.plan.update({
      where: { planId: id },
      data: updatedData,
    });
    return { success: true, response: updatedPlan };
  } catch (error) {
    console.error("Error updating plan:", error);
    throw new Error("Error updating plan.");
  }
}

export async function deletePlan(
  id: number
): Promise<{ success: boolean }> {
  try {
    await prisma.plan.delete({
      where: { planId: id },
    });
    return { success: true };
  } catch (error) {
    console.error("Error deleting plan:", error);
    throw new Error("Error deleting plan.");
  }
}