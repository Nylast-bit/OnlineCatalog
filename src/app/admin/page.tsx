"use client"
import { useState, useCallback } from 'react';
import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react';
import { CustomButton } from '../../../components';
import { motion, AnimatePresence } from 'framer-motion';  // Importar framer-motion
import Swal from 'sweetalert2';
import { useDropzone } from 'react-dropzone';


export default function Admin() {
  const [selectedOption, setSelectedOption] = useState(''); // Estado para almacenar la opción seleccionada

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };


  const onDrop = useCallback(async (acceptedFiles) => {
    acceptedFiles.forEach(file => {
      
    });
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
            <Label className="block mb-1">Seleccione si es plan o equipo</Label>
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
              <Field className="w-full">
                <Label className="block mb-2 mt-2">Tipo de plan</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Nombre del plan</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Features del plan</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Precio del plan</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Imagen del plan</Label>
                <div className='drop-zone' {...getRootProps()}>
                <input {...getInputProps()} />
                {
                  isDragActive ? (
                    <p className='w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white'>Arrastre y suelte el archivo aquí o haga click para seleccionar un archivo</p>
                  ) : (
                    <p className='w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer text-white'>Arrastre o haga clic para seleccionar un archivo</p>
                  )
                }

              </div>

                
              </Field>

              
              <Field className="w-full">
                <Label className="block mb-2 mt-2">Descripción del Plan</Label>
                <Textarea 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planDescription" 
                />
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
              <Field className="w-full">
                <Label className="block mb-2 mt-2">Tipo de GPS</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="equipmentName" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Nombre del Equipo</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Features del Equipo</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Precio del Equipo</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Imagen del Equipo</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-2 mt-2">Descripción del Equipo</Label>
                <Input 
                  className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

            </motion.div>
            </>
          )}
          </AnimatePresence>

          

          <Field className="w-full">
            <Label className="block mb-1">Notas</Label>
              <Textarea 
                className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Notas"
              />
          </Field>
        <CustomButton title="Guardar" handleClick={handleClick} containerStyles="bg-primary-700 text-white w-full rounded-lg h-15 mt-4" />  
        </Fieldset>

      </div>
    </div>
  );
}
