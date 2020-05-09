import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import * as style from './style';

export default props => {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const goLogin = () => {
    history.push('/user/login');
  };

  const onChange = (e, type) => {
    e.preventDefault();
    const value = e.target.value;

    if (type === 'email') {
      setEmail(value);
    } else if (type === 'password') {
      setPassword(value);
    } else if (type === 'password2') {
      setPassword2(value);
    }
  };

  const onSubmit = () => {

  };

  return (
    <style.Container>
      <style.Input
        placeholder="등록할 이메일을 입력하세요"
        type="email"
        onChange={e => onChange(e, 'email')}
      />

      <style.Input
        placeholder="비밀번호을 6자리 이상 입력하세요"
        type="password"
        onChange={e => onChange(e, 'password')}
      />

      <style.Input
        placeholder="비밀번호 확인을 입력하세요"
        type="password"
        onChange={e => onChange(e, 'password2')}
      />  

      <style.Register onClick={() => onSubmit()}>
        회원가입
      </style.Register>

      <style.Login onClick={() => goLogin()}>
        이미 계정이 있으신가요?
      </style.Login>
    </style.Container>
  );
};
