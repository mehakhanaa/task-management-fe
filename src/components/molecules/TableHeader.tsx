import React from 'react';

const TableHeader: React.FC = () => {
  return (
    <thead className="bg-gray-200">
      <tr>
        <th className="px-4 py-2 text-left">Select</th>
        <th className="px-4 py-2 text-left">Task ID</th>
        <th className="px-4 py-2 text-left">Title</th>
        <th className="px-4 py-2 text-left">Priority</th>
        <th className="px-4 py-2 text-left">Status</th>
        <th className="px-4 py-2 text-left">Start Time</th>
        <th className="px-4 py-2 text-left">End Time</th>
        <th className="px-4 py-2 text-left">Total Time (hrs)</th>
        <th className="px-4 py-2 text-left">Edit</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
