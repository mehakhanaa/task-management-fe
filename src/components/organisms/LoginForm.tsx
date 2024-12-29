import React, { useState } from 'react';
import FormField from '../molecules/FormField';
import Button from '../atoms/Button';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    alert(`Email: ${email}, Password: ${password}`);
  };

  return (
    <form className="max-w-md mx-auto p-4 bg-white rounded shadow">
      <FormField
        type="email"
        placeholder="Email ID"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button text="Sign in to continue" onClick={handleSubmit} className="w-full" />
    </form>
  );
};

export default LoginForm;
