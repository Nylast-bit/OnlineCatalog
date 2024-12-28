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
  let url = "";

  async function handleUpload(file: File): Promise<string | null> {
    try {
      const url = await uploadImage(file); // Suponiendo que esta función devuelve la URL
      console.log("Image URL:", url);
      return url; // Devuelve la URL
    } catch (error) {
      console.error("Image upload failed:", error);
      return null; // Devuelve null en caso de error
    }
  }


const handleClick = async (e: any) => {
    e.preventDefault();

    

    if (selectedFile && deviceType && deviceName && deviceFeatures && devicePrice && deviceDescription) {
      try {
        // Esperar a que la imagen se cargue y obtenga la URL
        const imageUrl = await handleUpload(selectedFile);
  
        // Verifica si se obtuvo la URL
        if (!imageUrl) {
          Swal.fire({
            icon: 'error',
            title: 'Error al cargar imagen',
            text: 'No se pudo obtener la URL de la imagen. Intente nuevamente.',
            confirmButtonText: 'OK',
          });
          return;
        }
  
        // Llama a createDevice con todos los parámetros necesarios
        await createDevice(
          deviceType,
          deviceName,
          deviceFeatures,
          parseFloat(devicePrice),
          imageUrl, // Asegúrate de pasar la URL correcta
          deviceDescription,
          notes
        );
  
        // Mostrar alerta de éxito
        Swal.fire({
          icon: 'success',
          title: 'Dispositivo guardado',
          text: 'Dispositivo ha sido guardado exitosamente.',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600',
            cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400',
          },
        });
      } catch (error) {
        console.error('Error al guardar el dispositivo:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error al guardar el dispositivo. Intente nuevamente.',
          confirmButtonText: 'OK',
        });
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Error',
        text: 'Por favor, rellene todos los campos antes de continuar.',
        confirmButtonText: 'OK',
        customClass: {
          confirmButton: 'bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600',
          cancelButton: 'bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400',
        },
      });
    }
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