import React, { useState, useEffect } from 'react';
import login from 'api/user/login';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  let navigate = useNavigate();

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState 한다.
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = () => {
    console.log('click login');
  };
  // 회원가입 이동 클릭 이벤트
  const onClickJoin = () => {
    navigate('/join');
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      login
        .test()
        .then((res) => {
          console.log(res);
        })
        .catch();
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="input_id"
          value={inputId}
          onChange={handleInputId}
        />
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          value={inputPw}
          onChange={handleInputPw}
        />
      </div>
      <div>
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
        <button type="button" onClick={onClickJoin}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Login;
