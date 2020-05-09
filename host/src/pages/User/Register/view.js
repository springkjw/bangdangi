import React from 'react';
import * as style from './style';
import Step0 from './Step0';

export default props => (
  <style.Container>
    {!props.type ? (
      <Step0 />
    ) : null}

    {/* {props.step === 0 ? (
      <style.Wrapper>
        <style.Input
          type="tel"
          placeholder="휴대전화(-없이)를 입력하세요"
          value={props.phone}
          onChange={props.onChangePhone}
        />

        <style.Button disabled={props.disable} onClick={() => props.onCertificate()}>
          인증번호 받기
        </style.Button>
      </style.Wrapper>
    ) : null}

    {props.step === 1 ? (
      <style.Wrapper>
        <style.Input
          type=""
          placeholder="인증번호를 입력하세요"
          onChange={props.onChangeValidate}
        />

        <style.Button disabled={props.disable} onClick={() => props.onCertificate()}>
          인증하기
        </style.Button>
      </style.Wrapper>
    ) : null} */}
  </style.Container>
);
