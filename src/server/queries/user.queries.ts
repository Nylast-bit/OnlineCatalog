"use server";
import { error } from "console";
import prisma from "../prismaClient";

//USER EXISTS
export async function userExists(
    id: number
): Promise<{ success: boolean; response?: any }> {
    try {
        const user = await prisma.user.findUnique({
            where: { userId: id },
        });

        if (user) {
            return {success: true, response: user };
        } else {
            return { success: false};
        }
    }
    catch (error)  {
        if (error instanceof Error){
            throw new Error(error.message);
        }
        else {
            return { success: false};
        }
    }
}

// CREATE USER

export async function createUser(
    userName: string,
    userEmail: string,
    userPassword: string,
): Promise <{ success: boolean; response?: any }> {
    try {
        const createdUser = await prisma.user.create({
            data: {
                userName,
                userEmail,
                userPassword
            }
        });
        return { success: true, response: createdUser };
    }
    catch (error)  {
        if (error instanceof Error){
            throw new Error(error.message);
        }
        else {
            throw new Error("An unknown error occurred.");
        }
    }
}

//GET ALL USERS

export async function getAllUsers(): Promise<{ success: boolean; response?: any }> {
    try {
      const users = await prisma.user.findMany(); 
      return { success: true, response: users };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        return { success: false };
      }
    }
  }


// READ USER BY ID

export async function getUserById(
    id: number,
): Promise <{ success: boolean; response?: any}> {
    try {
        const user = await prisma.user.findUnique({
            where: { userId: id },
        });
        if (user) {
            return { success: true, response: user };
        }
        else {
            return { success: false };
        }
    }
    catch (error)  {
        if (error instanceof Error){
            throw new Error(error.message);
        }
        else {
            return { success: false};
        }
    }
}

// UPDATE USER

export async function updateUser(
    id: number,
    updatedData: {
        userName?: string;
        userEmail?: string;
        userPassword?: string;
    }
): Promise<{ success: boolean; response?: any }>{
    try {
        const updateUser = await prisma.user.update({
            where: { userId: id },
            data: updatedData,
        });
        return { success: true, response: updateUser};
    }
    catch (error) {
        if (error instanceof Error){
            throw new Error(error.message);
        }
        else {
            return { success: false};
        }
    }
}

//DELETE USER

export async function deleteUser(
    id: number,
): Promise <{ success: boolean; response?: any}>{
    try {
        const deleteUser = await prisma.user.delete({
            where: { userId: id},
        });
        return { success: true, response: deleteUser };
    }
    catch (error) {
        if (error instanceof Error){
            throw new Error(error.message);
        }
        else {
            return { success: false};
        }
    }
}