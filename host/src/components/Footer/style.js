import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16px;
  background: #fafafa;
  width: 100%;
  padding: 32px;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Wrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Name = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
  color: #646468;
  line-height: 16px;
  font-weight: 500;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Content = styled.span`
  color: #7f7e83;
  font-size: 12px;
  line-height: 14px;
  margin-right: 15px;
`;

export const CopyRight = styled.p`
  font-size: 10px;
  color: #7f7e83;
  margin-top: 16px;
`;
