import React, { useState, useRef, useCallback, useEffect } from 'react';
import './App.css';
//import Index from 'components/index/Index';
import Index from 'router/index';
import Header from 'components/header/Header';
const App = () => {
  return (
    <div>
      <Header />
      <Index />
    </div>
  );
};

export default App;
