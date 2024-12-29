import React, { useState } from 'react';
import TaskListPageCard from '../../components/template/TaskListPageCard'; 
import TaskListPageTable from '../../components/template/TaskListPageTable'; 

const TaskListPage: React.FC = () => {
  const [isCardView, setIsCardView] = useState<boolean>(true); 

  const toggleView = () => {
    setIsCardView(!isCardView); 
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-semibold">Task List</h1>
        <button
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
          onClick={toggleView}
        >
          {isCardView ? 'Switch to Table View' : 'Switch to Card View'}
        </button>
      </div>

      
      {isCardView ? <TaskListPageCard /> : <TaskListPageTable />}
    </div>
  );
};

export default TaskListPage;
