import React from 'react';
import {useHistory} from 'react-router-dom';

import View from './view';

export default () => {
  const history = useHistory();

  const onLogout = () => {
    localStorage.removeItem('token');
    history.push('/user/login');
  };

  return (
    <View
      onLogout={onLogout}
    />
  );
};
