import styled from 'styled-components';
import * as colors from 'assets/colors';

export const Container = styled.div`
  width: 64px;
  height: 100%;
  background-color: ${colors.Main};
`;

export const Item = styled.div`
  position: relative;
  width: 58px;
  height: 58px;
  line-height: 58px;
  cursor: pointer;
  text-align: center;
  border-radius: 50%;
  transition: background-color .35s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 20px;

  :hover {
    background-color: rgba(74, 64, 196, .4);
    color: #fff;
  }
`;
