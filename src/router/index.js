import * as React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Index from 'components/index/Index';
import Login from 'components/login/Login';

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/login" element={<Login />} />
      {/* Not Found */}
      <Route path="/" element={<Navigate replace to="/" />} />
    </Routes>
  );
};

export default index;
