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
import '@/app/globals.css';
import PlanForm from '../../../components/PlanForm';
import DeviceForm from '../../../components/DeviceForm';


export default function Admin() {
  const [selectedOption, setSelectedOption] = useState(''); // Estado para almacenar la opción seleccionada
  const [images, setImages] = useState<string[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  

  

  


  

  return (
    <div className="flex-1 pt-36 padding-x">
      
      <h1 className="text-4xl font-bold text-center pb-3">Admin Panel</h1>
      <div className="flex w-full max-w-lg px-8 py-8 mx-auto bg-primary-500 rounded-2xl shadow-xl">
        <Fieldset className="space-y-6 w-full">
          <Legend className="text-xl font-bold flex-1 flex justify-center items-center text-white">Introducir Planes o Equipos</Legend>

          <Field className="w-full">
            <Label className="block mb-1 text-white">Seleccione si es plan o equipo</Label>
            <Select 
              className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="type" 
              onChange={handleSelectChange}
            >
              <option value="default">Seleccione una opción</option>
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
              
              <PlanForm/>
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
                <DeviceForm/>
              </motion.div>
            </>
          )}
          </AnimatePresence>

          
        </Fieldset>

      </div>
    </div>
  );
}
