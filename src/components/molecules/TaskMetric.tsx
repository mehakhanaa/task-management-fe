import React from 'react';

interface TaskMetricProps {
  label: string;
  value: string | number;
  unit?: string;
}

const TaskMetric: React.FC<TaskMetricProps> = ({ label, value, unit }) => {
  return (
    <div className="flex flex-col items-center text-left mb-4">
      <p className="text-3xl font-bold">{value} {unit && unit}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};

export default TaskMetric;
