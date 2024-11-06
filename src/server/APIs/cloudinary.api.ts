import React from 'react'

export async function uploadImage(file: File): Promise<string> {
    const cloudName = "decygjryy"; 
    const uploadPreset = "Normal"; 

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);

    try {
        const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
            method: "POST",
            body: formData,
        });
        
        // Comprueba si la respuesta fue exitosa
        if (!response.ok) {
            const errorMessage = await response.text(); // Captura el mensaje de error del servidor
            throw new Error(`Error: ${response.status} - ${errorMessage}`);
        }

        const data = await response.json();
        return data.secure_url;
    } catch (error) {
        console.error("Error uploading image:", error);
        throw error;
    }
}

