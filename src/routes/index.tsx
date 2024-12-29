import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import Dashboard from '../pages/Dashboard';
import TaskList from '../pages/TaskList';
import Navbar from '../components/organisms/Navbar';

const AppRouter: React.FC = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        
        <Navbar />

        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/task-list" element={<TaskList />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AppRouter;
