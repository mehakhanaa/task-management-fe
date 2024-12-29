import React, { useState } from "react";
import TaskCard from "../molecules/TaskCard";
import Button from "../atoms/Button";
import SortDropdown from "../molecules/SortDropdown";
import EditTaskModal from "../molecules/EditTaskModal";

const TaskListPageCard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState<any>(null);

  const handleEdit = (task: any) => {
    setTaskToEdit(task);
    setIsModalOpen(true);
  };

  const handleUpdateTask = (updatedTask: any) => {
    console.log("Updated Task:", updatedTask);
    setIsModalOpen(false);
  };

  const handleCancelEdit = () => {
    setIsModalOpen(false);
  };

  const [sortByPriority, setSortByPriority] = useState<string>("Priority");
  const [sortByStatus, setSortByStatus] = useState<string>("Status");

  const handleSortByPriorityChange = (value: string) => {
    setSortByPriority(value);
    
  };

  const handleSortByStatusChange = (value: string) => {
    setSortByStatus(value);
    
  };

  const handleAlphabeticalSort = () => {
    
  };

  const tasks = [
    {
      taskId: 1,
      taskTitle: "Design Homepage",
      status: "In Progress",
      priority: 3,
      startTime: "2024-12-01 08:00 AM",
      endTime: "2024-12-01 10:00 AM",
    },
    {
      taskId: 2,
      taskTitle: "Develop API",
      status: "Pending",
      priority: 2,
      startTime: "2024-12-02 09:00 AM",
      endTime: "2024-12-02 01:00 PM",
    },
    {
      taskId: 3,
      taskTitle: "Test Application",
      status: "Finished",
      priority: 1,
      startTime: "2024-12-03 07:00 AM",
      endTime: "2024-12-03 09:00 AM",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-row justify-between items-start gap-8 mb-6">
        <div className="flex flex-row gap-4">
          <Button
            text="Add Task"
            onClick={() => {
              
            }}
          />
        </div>
        <div className="flex flex-row gap-4">
          <Button
            text="Sort"
            onClick={handleAlphabeticalSort}
            className="rounded-full"
          />
          <SortDropdown
            options={["High", "Medium", "Low"]}
            onChange={handleSortByPriorityChange}
          />
          <SortDropdown
            options={["Completed", "In Progress", "Pending"]}
            onChange={handleSortByStatusChange}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <TaskCard
            key={task.taskId}
            taskId={task.taskId}
            taskTitle={task.taskTitle}
            status={task.status}
            priority={task.priority}
            startTime={task.startTime}
            endTime={task.endTime}
            onEdit={() => handleEdit(task)}
            onDelete={() => console.log(`Delete task with ID: ${task.taskId}`)}
          />
        ))}
      </div>

      {isModalOpen && (
        <EditTaskModal
          isOpen={isModalOpen}
          taskData={taskToEdit}
          onUpdate={handleUpdateTask}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default TaskListPageCard;
