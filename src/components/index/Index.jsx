import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div>
      <div>
        <Link to="/login">로그인/회원가입 </Link>
      </div>
      <div>
        <Link to="/file"> 파일업로드 </Link>
      </div>
    </div>
  );
};

export default Index;
