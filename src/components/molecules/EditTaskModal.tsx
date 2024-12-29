import React, { useState } from "react";
import DateTimePicker from "../atoms/DateTimePicker"; 

interface EditTaskModalProps {
  isOpen: boolean;
  taskData: {
    id: number;
    title: string;
    priority: number;
    status: string;
    startTime: string;
    endTime: string;
  };
  onUpdate: (updatedTask: any) => void;
  onCancel: () => void;
}

const EditTaskModal: React.FC<EditTaskModalProps> = ({
  isOpen,
  taskData,
  onUpdate,
  onCancel,
}) => {
  const [updatedTask, setUpdatedTask] = useState(taskData);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setUpdatedTask({ ...updatedTask, [name]: value });
  };

  const handleDateTimeChange = (field: string, value: Date) => {
    setUpdatedTask({ ...updatedTask, [field]: value.toISOString() }); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-2/5">
        <h2 className="text-2xl font-semibold mb-4">Edit Task</h2>

        
        <p className="mb-4 text-sm text-gray-600">Task ID: {taskData.id}</p>

        
        <label className="block mb-4">
          Title:
          <input
            type="text"
            name="title"
            value={updatedTask.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </label>


        <label className="block mb-4">
          Priority:
          <select
            name="priority"
            value={updatedTask.priority}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </label>

        
        <label className="block mb-4">
          Status:
          <select
            name="status"
            value={updatedTask.status}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Finished">Finished</option>
          </select>
        </label>

        
        <label className="block mb-4">
          Start Time:
          <DateTimePicker
            value={new Date(updatedTask.startTime)}
            onChange={(date) => handleDateTimeChange("startTime", date as Date)}
          />
        </label>

        <label className="block mb-4">
          End Time:
          <DateTimePicker
            value={new Date(updatedTask.endTime)}
            onChange={(date) => handleDateTimeChange("endTime", date as Date)}
          />
        </label>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => onUpdate(updatedTask)}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTaskModal;
