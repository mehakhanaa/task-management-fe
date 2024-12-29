import React from 'react';

interface ToggleSwitchProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ value, onChange }) => {
  return (
    <label className="inline-flex items-center">
      <span className="mr-2">Pending</span>
      <input
        type="checkbox"
        checked={value}
        onChange={() => onChange(!value)}
        className="toggle-checkbox"
      />
      <span className="ml-2">Finished</span>
    </label>
  );
};

export default ToggleSwitch;
