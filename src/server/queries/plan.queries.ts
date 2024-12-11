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