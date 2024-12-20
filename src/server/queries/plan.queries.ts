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
  planDescription: String
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

//GET ALL PLANS
export async function getAllPlans(): Promise<{ success: boolean; response?: any }> {
  try {
    const plans = await prisma.plan.findMany(); // Recupera todos los planes
    return { success: true, response: plans };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      return { success: false };
    }
  }
}


// READ PLAN BY ID
export async function readPlanById(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const plan = await prisma.plan.findUnique({
      where: { planId: id },
    });
    if (plan) {
      return { success: true, response: plan };
    } else {
      return { success: false, response: "Plan not found" };
    }
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      return { success: false };
    }
  }
}


//UPDATE PLAN 

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
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      return { success: false };
    }
  }
}

// DELETE PLAN

export async function deletePlan(
  id: number
): Promise<{ success: boolean; response?: any }> {
  try {
    const deletedPlan = await prisma.plan.delete({
      where: { planId: id },
    });
    return { success: true, response: deletedPlan };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      return { success: false };
    }
  }
}

