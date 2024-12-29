import React from 'react';

interface StatusLabelProps {
  status: 'Pending' | 'In Progress' | 'Finished';
}

const StatusLabel: React.FC<StatusLabelProps> = ({ status }) => {
  const statusClasses = {
    Pending: 'bg-yellow-300 text-yellow-700',
    'In Progress': 'bg-blue-300 text-blue-700',
    Finished: 'bg-green-300 text-green-700',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusClasses[status]}`}>
      {status}
    </span>
  );
};

export default StatusLabel;
