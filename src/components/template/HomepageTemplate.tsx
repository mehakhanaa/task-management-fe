import React from 'react';
import Navbar from '../organisms/Navbar';
import LoginForm from '../organisms/LoginForm';
import Heading from '../atoms/Heading';

const HomepageTemplate: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="w-full max-w-md px-6 py-8 bg-white rounded-lg shadow-lg">
        <Heading text="Welcome to To-do app" className="text-center mb-6" />
        <LoginForm />
      </div>
    </div>
  );
};

export default HomepageTemplate;
