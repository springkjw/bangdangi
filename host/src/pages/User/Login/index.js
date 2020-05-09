import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'utils/axios';

import View from './view';

export default () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disableLogin, setDisable] = useState(true);

  useEffect(() => {
    if (email.length > 0 && password.length >  6) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [email, password]);

  const onChange = (e, type) => {
    e.preventDefault();
    const value = e.target.value;

    if (type === 'email') {
      setEmail(value);
    } else if (type === 'password') {
      setPassword(value);
    }
  };

  const goRegister = () => {
    history.push("/user/register");
  };

  const onSubmit = async () => {
    if (email.length > 0 && password.length > 0) {
      setLoading(true);
      try {
        const res = await axios.post(
          '/api/users/login/',
          {email, password}
        );
  
        const {token} = res.data;
        if (token && token.length > 0) {
          localStorage.setItem('token', token);
          history.push('/');
        }
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <View
      email={email}
      password={password}
      disableLogin={disableLogin}
      loading={loading}
      onChange={onChange}
      onSubmit={onSubmit}
      goRegister={goRegister}
    />
  );
};
