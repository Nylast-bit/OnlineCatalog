// components/AdminFormSection.tsx
import React from 'react';
import CustomInputField from './CustomInputField';

interface Field {
  label: string;
  type: 'text' | 'number' | 'file';
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface AdminFormSectionProps {
  fields: Field[];
}

const AdminFormSection: React.FC<AdminFormSectionProps> = ({ fields }) => {
  return (
    <div>
      {fields.map((field) => (
        <CustomInputField
          key={field.name}
          label={field.label}
          onChange={field.onChange}
          // Aplica una clase de texto blanco para que sea consistente en todo el formulario
          inputProps={{
            className: 'text-white',
            type: field.type,
            value: field.value,
          }}
        />
      ))}
    </div>
  );
};

export default AdminFormSection;
