import React, { useCallback } from 'react'
import { useState } from 'react'
import CustomInputField from './CustomInputField';
import { Field, Label } from '@headlessui/react';
import { useDropzone } from 'react-dropzone';
import { uploadImage } from '@/server/APIs/cloudinary.api';
import CustomButton from './CustomButton';
import Swal from 'sweetalert2';
import { createDevice } from '@/server/queries/device.queries';
import { time } from 'console';

const DeviceForm = () => {
    const [images, setImages] = useState<string[]>([]);
  const [notes, setNotes] = useState('');

  const [deviceType, setDeviceType] = useState('');
  const [deviceName, setDeviceName] = useState('');
  const [deviceFeatures, setDeviceFeatures] = useState('');
  const [devicePrice, setDevicePrice] = useState('');
  const [deviceDescription, setDeviceDescription] = useState('');
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
        const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
        await sleep(1000); // Pausar por 1 segundo
        console.log("Image URL:", imageUrl); // Haz algo con la URL de la imagen
    } catch (error) {
        console.error("Image upload failed:", error);
    }
}

const handleClick = async (e: any) => {
    e.preventDefault();
    handleUpload(selectedFile);
  
    if (selectedFile) await handleUpload(selectedFile);
      
        createDevice(
          deviceType,
          deviceName,
          deviceFeatures,
          parseFloat(devicePrice),
          imageUrl,
          deviceDescription,
          notes
        );
        
        
        console.log(imageUrl)
        Swal.fire({
          icon: 'success',
          title: 'Dispositivo guardado',
          text: 'El Dispositivo ha sido guardado exitosamente.',
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
                  <CustomInputField label="Tipo de GPS" onChange={(e) => setDeviceType(e.target.value)} />
                  <CustomInputField label="Nombre del GPS" onChange={(e) => setDeviceName(e.target.value)} />
                  <CustomInputField label="Features del GPS" onChange={(e) => setDeviceFeatures(e.target.value)} />
                  <CustomInputField label="Precio del GPS" onChange={(e) => setDevicePrice(e.target.value)} />
                </div>
                  <CustomInputField label="Descripción del GPS" onChange={(e) => setDeviceDescription(e.target.value)} />

                <Field className="w-full">
                  <Label className="block mb-2 mt-2 text-white">Imagen del Equipo</Label>
                  <div className="drop-zone" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p className="w-full h-10 px-7 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 text-white">Suelte el archivo aquí</p>
                    ) : (
                      <p className="w-full h-10 px-7 mt-3 border rounded-lg text-center focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-white">Arrastre o haga clic para seleccionar un archivo</p>
                    )}
                  </div>

                  <div>
                    {images.map((image, index) => (
                      <div key={index}>
                        <img src={image} alt={`preview ${index}`} />
                      </div>
                    ))}
                  </div>
                </Field>
                <CustomInputField label="Notas" onChange={e => setNotes(e.target.value)} />
        <CustomButton title="Guardar" handleClick={handleClick} containerStyles="bg-primary-700 text-white w-full rounded-lg h-15 mt-4" />  
    </div>
  )
}

export default DeviceForm