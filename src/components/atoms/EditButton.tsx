import React from 'react';

interface EditButtonProps {
  onClick: () => void;
}

const EditButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-blue-500 hover:text-blue-700">
      Edit
    </button>
  );
};

export default EditButton;
