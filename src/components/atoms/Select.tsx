import React from 'react';

interface SelectProps {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  options: string[];
}

const Select: React.FC<SelectProps> = ({ value, onChange, label, options }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
