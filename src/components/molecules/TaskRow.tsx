import React from "react";
import Checkbox from "../atoms/Checkbox";
import EditButton from "../atoms/EditButton";

interface TaskRowProps {
  task: {
    id: number;
    title: string;
    priority: string;
    status: string;
    startTime: string;
    endTime: string;
    totalTime: number;
  };
  onEdit: () => void;
}

const TaskRow: React.FC<TaskRowProps> = ({ task, onEdit }) => {
  return (
    <tr className="border-b">
      <td className="px-4 py-2">
        <Checkbox />
      </td>
      <td className="px-4 py-2">{task.id}</td>
      <td className="px-4 py-2">{task.title}</td>
      <td className="px-4 py-2">{task.priority}</td>
      <td className="px-4 py-2">{task.status}</td>
      <td className="px-4 py-2">{task.startTime}</td>
      <td className="px-4 py-2">{task.endTime}</td>
      <td className="px-4 py-2">{task.totalTime}</td>
      <td className="px-4 py-2">
        <EditButton onClick={onEdit} />
      </td>
    </tr>
  );
};

export default TaskRow;
