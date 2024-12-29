import React from 'react';

interface SortDropdownProps {
  options: string[];
  onChange: (value: string) => void;
}

const SortDropdown: React.FC<SortDropdownProps> = ({ options, onChange }) => {
  return (
    <select
      className="p-2 bg-gray-200 border rounded-full"
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default SortDropdown;
