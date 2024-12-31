import React from "react";

interface DateTimePickerProps {
  value: string; 
  onChange: (value: string) => void; 
  label: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ value, onChange, label }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-semibold">{label}</label>
      <input
        type="datetime-local"
        value={value}
        onChange={(e) => onChange(e.target.value)} 
        className="w-full p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
};

export default DateTimePicker;
