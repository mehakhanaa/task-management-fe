import React, { useState } from "react";
import Button from "../atoms/Button";
import SortDropdown from "../molecules/SortDropdown";
import Navbar from "../organisms/Navbar";
import Table from "../organisms/Table";
import EditTaskModal from "../molecules/EditTaskModal";

const TaskListPageTable: React.FC = () => {
  const [sortByPriority, setSortByPriority] = useState<string>("Priority");
  const [sortByStatus, setSortByStatus] = useState<string>("Status");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedTask, setSelectedTask] = useState<any | null>(null);

  const handleSortByPriorityChange = (value: string) => {
    setSortByPriority(value);
    
  };

  const handleSortByStatusChange = (value: string) => {
    setSortByStatus(value);
    
  };

  const handleAlphabeticalSort = () => {
    
  };

  const handleEditTask = (task: any) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleUpdateTask = (updatedTask: any) => {
    
    console.log("Updated Task:", updatedTask);
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  const handleCancelEdit = () => {
    setIsModalOpen(false);
    setSelectedTask(null);
  };

  return (
    <div className="container mx-auto p-8">
      <section className="mb-8">
        <div className="flex flex-row justify-between items-start gap-8 mb-6">
          <div className="flex flex-row gap-4">
            <Button
              text="Add Task"
              onClick={() => {
                
              }}
            />
            <Button
              text="Delete Selected"
              onClick={() => {
                
              }}
            />
          </div>
          <div className="flex flex-row gap-4">
            <Button
              text="Sort"
              onClick={() => {
                
              }}
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
        <Table onEditTask={handleEditTask} />
      </section>

      
      {isModalOpen && selectedTask && (
        <EditTaskModal
          isOpen={isModalOpen}
          taskData={selectedTask}
          onUpdate={handleUpdateTask}
          onCancel={handleCancelEdit}
        />
      )}
    </div>
  );
};

export default TaskListPageTable;
