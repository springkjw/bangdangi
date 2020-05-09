import React, {useEffect} from 'react';
import {Route, useHistory} from 'react-router-dom';

export default ({component, notRequireAuth = false, requireAuth = true, ...options}) => {
  const history = useHistory();
  const token = localStorage.getItem('token') || '';
  
  useEffect(() => {
    if (token.length > 0 && notRequireAuth && !requireAuth) {
      history.push('/');
    } else if (token.length === 0 && !notRequireAuth && requireAuth) {
      history.push('/user/login');
    }
  }, []);

  return <Route {...options} component={component} />
};

