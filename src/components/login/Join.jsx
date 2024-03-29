import React, { useState, useEffect } from 'react';
import login from 'api/user/login';
import { Link, useNavigate } from 'react-router-dom';

const Join = () => {
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  let navigate = useNavigate();

  // input data의 변화가 있을 때마다 value 값을 변경해서 useState 한다.
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  // 회원가입 클릭 이벤트
  const onClickMember = () => {
    const params = {
      loginId: inputId,
      loginPassword: inputPw,
      email: inputEmail,
    };
    login
      .join(params)
      .then((res) => {
        if (res.data.status == 8002) {
          alert(res.data.message);
          return false;
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  // 회원가입 이동 클릭 이벤트
  const onClickBack = () => {
    navigate('/login');
  };

  // 페이지 렌더링 후 가장 처음 호출되는 함수
  useEffect(
    () => {
      // login
      //   .test()
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     let res = err.response;
      //     console.log(res);
      //   });
    },
    // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
    []
  );
  return (
    <div>
      <h2>Join</h2>
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
        <label htmlFor="input_email">EMAIL : </label>
        <input
          type="text"
          name="input_email"
          value={inputEmail}
          onChange={handleInputEmail}
        />
      </div>
      <div>
        <button type="button" onClick={onClickBack}>
          취소
        </button>
        <button type="button" onClick={onClickMember}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Join;
