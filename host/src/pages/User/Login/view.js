import React from 'react';
import * as images from 'assets/images';
import * as style from './style';

export default props => (
  <style.Container>
    <style.Wrapper>
      <style.LogoWrapper>
        <style.Logo src={images.Logo} />
        <style.SubTitle>for 호스트</style.SubTitle>
      </style.LogoWrapper>

      <style.Input 
        placeholder="아이디(이메일 주소)를 입력하세요" 
        type="email"
        onChange={e => props.onChange(e, 'email')}
      />
      <style.Input
        placeholder="비밀번호를 입력하세요"
        type="password"
        onChange={e => props.onChange(e, 'password')}
      />

      <style.Login disabled={props.disableLogin} onClick={() => props.onSubmit()}>
        로그인
      </style.Login>
    </style.Wrapper>

    <style.Register onClick={() => props.goRegister()}>
      호스트 등록을 하고 싶으신가요?
    </style.Register>
  </style.Container>
);
