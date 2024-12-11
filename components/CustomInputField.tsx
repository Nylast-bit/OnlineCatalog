import React from 'react';

interface CustomInputFieldProps {
  label: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const CustomInputField: React.FC<CustomInputFieldProps> = ({ label, onChange }) => {
  return (
    <div className="w-full">
      <label className="block mb-1 mt-2 text-white">{label}</label>
      <input 
        type="text"
        className="w-full h-10 px-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInputField;
