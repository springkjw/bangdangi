import React from 'react';
import moment from 'moment';
import * as style from './style';

export default () => (
  <style.Container>
    <style.Wrapper>
      <style.Name>(주) 방단기</style.Name>

      <style.Row>
        <style.Content>서울특별시 강남구 역삼동 795-2, 2층</style.Content>
        <style.Content>대표 : 김한솔</style.Content>
        <style.Content>사업자등록번호 : 165-86-00709</style.Content>
      </style.Row>
        
      <style.Row>
        <style.Content>대표번호 : 070-5176-7766 (10:00~19:00 / 점심시간 13:00~14:00)</style.Content>
      </style.Row>

      <style.CopyRight>
        ©{moment().format('YYYY')}. Bangdangi. All rights reserved.
      </style.CopyRight>
    </style.Wrapper>
  </style.Container>
);
