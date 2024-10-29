"use client"
import { useState } from 'react';
import { Field, Fieldset, Input, Label, Legend, Select, Textarea } from '@headlessui/react';
import { CustomButton } from '../../../components';

export default function Admin() {
  const [selectedOption, setSelectedOption] = useState(''); // Estado para almacenar la opción seleccionada

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleClick = async (e: any) => {
    e.preventDefault()
  }

  return (
    <div className="flex-1 pt-36 padding-x">
      <h1 className="text-4xl font-bold text-center pb-3">Admin Panel</h1>
      <div className="flex w-full max-w-lg px-8 py-16 mx-auto bg-primary-500 rounded-2xl shadow-xl">
        <Fieldset className="space-y-6 w-full">
          <Legend className="text-lg font-bold">Introducir Planes o Equipos</Legend>

          <Field className="w-full">
            <Label className="block mb-1">Seleccione si es plan o equipo</Label>
            <Select 
              className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="type" 
              onChange={handleSelectChange}
            >
              <option value="">Seleccione una opción</option>
              <option value="plan">Plan</option>
              <option value="equipo">Equipo</option>
            </Select>
          </Field>

          {selectedOption === 'plan' && (
            <>
              <Field className="w-full">
                <Label className="block mb-1">Tipo de plan</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Nombre del plan</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Features del plan</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Precio del plan</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Imagen del plan</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planType" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Descripción del Plan</Label>
                <Textarea 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="planDescription" 
                />
              </Field>
            </>
          )}

          {selectedOption === 'equipo' && (
            <>
              <Field className="w-full">
                <Label className="block mb-1">Tipo de GPS</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="equipmentName" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Nombre del Equipo</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Features del Equipo</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Precio del Equipo</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Imagen del Equipo</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>

              <Field className="w-full">
                <Label className="block mb-1">Descripción del Equipo</Label>
                <Input 
                  className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  name="serialNumber" 
                />
              </Field>
            </>
          )}

          

          <Field className="w-full">
            <Label className="block mb-1">Notas</Label>
              <Textarea 
                className="w-full h-10 px-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="Notas"
              />
          </Field>
        <CustomButton title="Guardar" handleClick={handleClick} containerStyles="bg-white text-black w-full rounded-lg h-15 mt-4" />  
        </Fieldset>

      </div>
    </div>
  );
}
