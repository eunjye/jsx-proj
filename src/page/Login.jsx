import React, { useEffect, useState } from 'react';

// dummy data
const User = {
  email: '11111',
  pw: '1234',
};

const Login = ({ name }) => {
  const _name = name || '';
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(false);

  const handleEmail = (e) => {
    const getValue = e.target.value;
    setEmail(getValue);

    if (getValue.length > 3) {
      setEmailValid(true);
    }
    if (getValue.length <= 3) {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    const getValue = e.target.value;
    setPw(e.target.value);

    if (getValue.length > 2) {
      setPwValid(true);
    }
    if (getValue.length <= 2) {
      setPwValid(false);
    }
  };
  const onClickConfirmButton = (e) => {
    if (email !== User.email || pw !== User.pw) {
      alert('아이디나 패스워드가 맞지 않습니다.');
      return;
    }
    alert('로그인 성공!');
  };

  useEffect(() => {
    // 해당값들이 바뀔때마다 ,
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]); // 두번째 인자에 빈 배열 [] 을 넣으면, 처음 mount됐을 때만 실행되고, 인자를 전달하지않으면 렌더링될때마다 실행됨..

  return (
    <>
      <h1> {_name}</h1>
      <strong>email</strong>
      <div>
        <input type="text" placeholder="" value={email} onChange={handleEmail} />
      </div>
      {!!emailValid && <div className="">이건 길다</div>}
      <strong>비밀번호</strong>
      <div>
        <input type="password" value={pw} onChange={handlePw} />
      </div>
      {!!pwValid && <div className="">이건 초~ 길다</div>}
      {/* { !!notAllow && ( */}
      <button onClick={onClickConfirmButton} disabled={notAllow}>
        둘 다 길다
      </button>
      {/* )} */}
    </>
  );
};

export default Login;
