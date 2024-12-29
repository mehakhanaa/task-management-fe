import React from 'react';
import TaskMetric from '../../components/molecules/TaskMetric';
import TaskPriorityTable from '../../components/molecules/TaskPriorityTable';
import Heading from '../../components/atoms/Heading'; 

const Dashboard: React.FC = () => {
  const taskPriorityData = [
    { priority: 1, pendingTasks: 3, timeLapsed: 5, timeToFinish: 10 },
    { priority: 2, pendingTasks: 5, timeLapsed: 8, timeToFinish: 12 },
    { priority: 3, pendingTasks: 8, timeLapsed: 10, timeToFinish: 15 },
    { priority: 4, pendingTasks: 12, timeLapsed: 15, timeToFinish: 20 },
    { priority: 5, pendingTasks: 15, timeLapsed: 20, timeToFinish: 30 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white rounded-lg shadow">
      
      <Heading text="Dashboard" className="text-4xl font-bold mb-6 text-left" />
      
      
      <section className="mb-8">
        <Heading text="Summary" className="text-3xl font-semibold mb-6" />
        
        <div className="flex flex-row gap-16">
          <TaskMetric label="Total Tasks" value={50} />
          <TaskMetric label="Tasks Completed" value={75} unit="%" />
          <TaskMetric label="Tasks Pending" value={25} unit="%" />
          <TaskMetric label="Avg Time per Completed Task" value={2.5} unit="hrs" />
        </div>
      </section>
      
      
      <section className="mb-8">
        <Heading text="Pending Task Summary" className="text-3xl font-semibold mb-6" />
        
        <div className="flex flex-row gap-16">
          <TaskMetric label="Pending Tasks" value={20} />
          <TaskMetric label="Total Time Lapsed" value={50} unit="hrs" />
          <TaskMetric label="Estimated Time to Finish" value={70} unit="hrs" />
        </div>
      </section>

      
      <TaskPriorityTable data={taskPriorityData} />
    </div>
  );
};

export default Dashboard;
