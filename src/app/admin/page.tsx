"use client"
import { useState, useCallback } from 'react';
import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react';
import { CustomButton } from '../../../components';
import { motion, AnimatePresence } from 'framer-motion';  // Importar framer-motion
import Swal from 'sweetalert2';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from '@/server/APIs/cloudinary.api';
import { image } from 'framer-motion/client';
import { createPlan, planExists } from '@/server/queries/plan.queries';
import { create } from 'domain';
import CustomInputField from '../../../components/CustomInputField';


export default function Admin() {
  const [selectedOption, setSelectedOption] = useState(''); // Estado para almacenar la opción seleccionada
  const [images, setImages] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const [planType, setPlanType] = useState('');
  const [planName, setPlanName] = useState('');
  const [planFeatures, setPlanFeatures] = useState('');
  const [planPrice, setPlanPrice] = useState('');
  const [planDescription, setPlanDescription] = useState('');
  const [imageUrl, setImageUrl] = useState(''); 

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  async function handleUpload(file: File) {
    try {
        const url = await uploadImage(file);
        setImageUrl(url);
        console.log("Image URL:", imageUrl); // Haz algo con la URL de la imagen
    } catch (error) {
        console.error("Image upload failed:", error);
    }
}

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
  console.log(selectedFile);

  const handleClick = async (e: any) => {
    e.preventDefault();
  
    if (selectedOption === 'plan') {
      
      if (selectedFile) await handleUpload(selectedFile);
      
      createPlan(
        planType,
        planName,
        planFeatures,
        parseFloat(planPrice),
        imageUrl,
        planDescription,
        
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


      handleUpload(selectedFile);
      
    } else if (selectedOption === 'equipo') {
      
      Swal.fire({
        icon: 'success',
        title: 'Equipo guardado',
        text: 'El equipo ha sido guardado exitosamente.',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600',
          cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400',
        },
      });
    } else {

      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, seleccione una opción antes de continuar.',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600',
          cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400',
        },
        
      });
    }
  };

  return (
    <div className="flex-1 pt-36 padding-x">
      
      <h1 className="text-4xl font-bold text-center pb-3">Admin Panel</h1>
      <div className="flex w-full max-w-lg px-8 py-16 mx-auto bg-primary-500 rounded-2xl shadow-xl">
        <Fieldset className="space-y-6 w-full">
          <Legend className="text-xl font-bold flex-1 flex justify-center items-center text-white">Introducir Planes o Equipos</Legend>

          <Field className="w-full">
            <Label className="block mb-1 text-white">Seleccione si es plan o equipo</Label>
            <Select 
              className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="type" 
              onChange={handleSelectChange}
            >
              <option value="">Seleccione una opción</option>
              <option value="plan">Plan</option>
              <option value="equipo">Equipo</option>
            </Select>
          </Field>

          <AnimatePresence mode="wait">

          {selectedOption === 'plan' && (
            <>
             <motion.div
                key="plan"  // Clave única para detectar el cambio
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}  // Animación de salida
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
              <CustomInputField label="Tipo de plan" onChange={(e) => setPlanType(e.target.value)} />
              <CustomInputField label="Nombre del plan" onChange={(e) => setPlanName(e.target.value)} />
              <CustomInputField label="Features del plan" onChange={(e) => setPlanFeatures(e.target.value)} />
              <CustomInputField label="Precio del plan" onChange={(e) => setPlanPrice(e.target.value)} />
              <CustomInputField label="Descripción del Plan" onChange={(e) => setPlanDescription(e.target.value)} />

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
            </motion.div>
            </>
          )}

          {selectedOption === 'equipo' && (
            <>
              <motion.div
                key="equipo"  // Clave única para la animación de equipo
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}  // Animación de salida
                transition={{
                  duration: 0.8,
                  delay: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <CustomInputField label="Tipo de GPS" onChange={(e) => setPlanType(e.target.value)} />
                <CustomInputField label="Nombre del plan" onChange={(e) => setPlanName(e.target.value)} />
                <CustomInputField label="Features del plan" onChange={(e) => setPlanFeatures(e.target.value)} />
                <CustomInputField label="Precio del plan" onChange={(e) => setPlanPrice(e.target.value)} />
                <CustomInputField label="Descripción del plan" onChange={(e) => setPlanDescription(e.target.value)} />

                <Field className="w-full">
                <Label className="block mb-2 mt-2 text-white">Imagen del Equipo</Label>
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

              

            </motion.div>
            </>
          )}
          </AnimatePresence>

          

          <CustomInputField label="Notas" onChange={e => setNotes(e.target.value)} />
        <CustomButton title="Guardar" handleClick={handleClick} containerStyles="bg-primary-700 text-white w-full rounded-lg h-15 mt-4" />  
        </Fieldset>

      </div>
    </div>
  );
}
