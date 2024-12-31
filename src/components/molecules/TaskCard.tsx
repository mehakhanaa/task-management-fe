import React from "react";
import StatusLabel from "../atoms/StatusLabel";

interface TaskCardProps {
  taskId: number;
  taskTitle: string;
  status: "Pending" | "In Progress" | "Finished"; // Explicitly match StatusLabelProps
  priority: number;
  startTime: string;
  endTime: string;
  onEdit: () => void;
  onDelete: () => void;
}

const TaskCard: React.FC<TaskCardProps> = ({
  taskId,
  taskTitle,
  status,
  priority,
  startTime,
  endTime,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <p className="text-sm text-gray-600 mb-2">Task ID: {taskId}</p>
      <h2 className="text-2xl font-semibold text-left mb-4">{taskTitle}</h2>
      <div className="flex justify-between items-center mb-4">
        <StatusLabel status={status} />
        <p className="text-sm text-gray-700 mr-4">Priority: {priority}</p>
      </div>
      <div className="flex items-center mb-4">
        <p className="text-sm text-gray-700 mr-4">
          Start Time:
          <p>{startTime}</p>
        </p>
        <p className="text-sm text-gray-700">
          End Time:
          <p>{endTime}</p>
        </p>
      </div>
      <hr className="my-4 border-t-2 border-gray-200" />
      <div className="flex justify-around">
        <button
          className="text-blue-500 underline hover:no-underline"
          onClick={onEdit}
        >
          Edit
        </button>
        <button
          className="text-red-500 underline hover:no-underline"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
