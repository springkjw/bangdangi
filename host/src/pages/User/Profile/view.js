import React from 'react';

import * as style from './style';

export default props => (
  <style.Container>

    <style.ImageWrapper>
      <style.Image />
    </style.ImageWrapper>

    <style.Logout onClick={() => props.onLogout()}>
      로그아웃
    </style.Logout>
  </style.Container>
);
