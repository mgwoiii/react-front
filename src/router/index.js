import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Index from 'components/index/Index';
import Login from 'components/login/Login';
import Join from 'components/login/Join';
import TodoTempleate from 'components/todoList/Index';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      <Route path="/join" element={<Join />} />
      <Route path="/todoTempleate" element={<TodoTempleate />} />
      {/* Not Found */}
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default index;
