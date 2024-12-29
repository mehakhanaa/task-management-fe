import React from 'react';

interface TaskInfoProps {
  label: string;
  value: string | number;
}

const TaskInfo: React.FC<TaskInfoProps> = ({ label, value }) => {
  return (
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-600">{label}:</span>
      <span className="font-semibold">{value}</span>
    </div>
  );
};

export default TaskInfo;
