
import React from 'react';
import CreateVote from './CreateVote';
import 'antd/dist/reset.css'; 
import '../../styles/globals.css'; 
const TestPage3: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f0f2f5', minHeight: '100vh', padding: '20px' }}>
      <CreateVote />
    </div>
  );
};

export default TestPage3;
