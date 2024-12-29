import React from 'react';

interface TaskPriorityTableProps {
  data: {
    priority: number;
    pendingTasks: number;
    timeLapsed: number;
    timeToFinish: number;
  }[];
}

const TaskPriorityTable: React.FC<TaskPriorityTableProps> = ({ data }) => {
  return (
    <table className="table-auto w-2/3 text-left">
      <thead className="bg-gray-700 text-white">
        <tr>
          <th className="border px-4 py-2">Task Priority</th>
          <th className="border px-4 py-2">Pending Tasks</th>
          <th className="border px-4 py-2">Time Lapsed (hrs)</th>
          <th className="border px-4 py-2">Time to Finish (hrs)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="border px-4 py-2">{row.priority}</td>
            <td className="border px-4 py-2">{row.pendingTasks}</td>
            <td className="border px-4 py-2">{row.timeLapsed}</td>
            <td className="border px-4 py-2">{row.timeToFinish}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskPriorityTable;
