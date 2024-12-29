import React from "react";
import TableHeader from "../molecules/TableHeader";
import TaskRow from "../molecules/TaskRow";

interface TableProps {
  onEditTask: (task: any) => void;
}

const Table: React.FC<TableProps> = ({ onEditTask }) => {
  const tasks = [
    { id: 1, title: "Task 1", priority: "High", status: "In Progress", startTime: "9:00 AM", endTime: "11:00 AM", totalTime: 2 },
    { id: 2, title: "Task 2", priority: "Low", status: "Completed", startTime: "10:00 AM", endTime: "12:00 PM", totalTime: 2 },
    
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <TableHeader />
        <tbody>
          {tasks.map((task) => (
            <TaskRow key={task.id} task={task} onEdit={() => onEditTask(task)} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
