"use client"
import { div } from 'framer-motion/client'
import React from 'react'
import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react'

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';  // Importar framer-motion
import Swal from 'sweetalert2';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from '@/server/APIs/cloudinary.api';
import { image } from 'framer-motion/client';
import { createPlan, planExists } from '@/server/queries/plan.queries';
import { create } from 'domain';
import '@/app/globals.css';
import CustomInputField from './CustomInputField';
import CustomButton from './CustomButton';



const PlanForm = () => {

  const [images, setImages] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const [planType, setPlanType] = useState('');
  const [planName, setPlanName] = useState('');
  const [planFeatures, setPlanFeatures] = useState('');
  const [planPrice, setPlanPrice] = useState('');
  const [planDescription, setPlanDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(''); 

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const newImages = acceptedFiles.map((file) => {
      // Crear una URL temporal para previsualización
      return URL.createObjectURL(file);
    });

    // Guardar las imágenes en el estado
    setImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const { 
    getRootProps, 
    getInputProps, 
    acceptedFiles, 
    isDragActive 
  } = useDropzone( { onDrop } );  

  const selectedFile = acceptedFiles[0];

  async function handleUpload(file: File) {
    try {
        const url = await uploadImage(file);
        setImageUrl(url);
        console.log("Image URL:", imageUrl); // Haz algo con la URL de la imagen
    } catch (error) {
        console.error("Image upload failed:", error);
    }
}

  const handleClick = async (e: any) => {
    e.preventDefault();
    handleUpload(selectedFile);
  
    if (selectedFile) await handleUpload(selectedFile);
      
        createPlan(
          planType,
          planName,
          planFeatures,
          parseFloat(planPrice),
          imageUrl,
          planDescription,
          notes
        );
      
        Swal.fire({
          icon: 'success',
          title: 'Plan guardado',
          text: 'El plan ha sido guardado exitosamente.',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600',
            cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400',
          },
        });

        // Swal.fire({
        //     icon: 'warning',
        //     title: 'Error',
        //     text: 'Por favor, seleccione una opción antes de continuar.',
        //     confirmButtonText: 'OK',
        //     customClass: {
        //       confirmButton: 'bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600',
        //       cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400',
        //     },
            
        //   });


    
  };

  return (
    <div>
      <div className="grid-container">
              <CustomInputField label="Tipo de plan" onChange={(e: any) => setPlanType(e.target.value)} />
              <CustomInputField label="Nombre del plan" onChange={(e: any) => setPlanName(e.target.value)} />
              <CustomInputField label="Features del plan" onChange={(e: any) => setPlanFeatures(e.target.value)} />
              <CustomInputField label="Precio del plan" onChange={(e: any) => setPlanPrice(e.target.value)} />

              </div>
              <CustomInputField label="Descripción del Plan" onChange={(e: any) => setPlanDescription(e.target.value)} />

              <Field className="w-full">
                <Label className="block mb-2 mt-2 text-white">Imagen del plan</Label>
                <div className='drop-zone' {...getRootProps()}>
                  <input {...getInputProps()} />
                  {
                    isDragActive ? (
                      <p className='w-full h-10 px-7 border rounded-lg  text-center  focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'>Suelte el archivo aquí</p>
                    ) : (
                      <p className='w-full h-10 px-7 mt-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-white'>Arrastre o haga clic para seleccionar un archivo</p>
                    )
                  }
                </div>

              <div >
                {images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`preview ${index}`}  />
                  </div>
                ))}
              </div>

                
              </Field>


              <CustomInputField label="Notas" onChange={e => setNotes(e.target.value)} />
        <CustomButton title="Guardar" handleClick={handleClick} containerStyles="bg-primary-700 text-white w-full rounded-lg h-15 mt-4" />  
    </div>
  )
    
  
}

export default PlanForm