import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  let navigate = useNavigate();

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {},
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );
  return (
    <div>
      <h2>Header</h2>
    </div>
  );
};

export default Header;
