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
         
        />
      ))}
    </div>
  );
};

export default AdminFormSection;
