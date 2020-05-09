import styled from 'styled-components';
import * as colors from 'assets/colors';

export const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -100px;
  width: 432px;
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  padding: 16px;
  font-size: 14px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid #f1f2f4;

  &:focus {
    border: 1px solid ${colors.Main};
    box-shadow: 0 2px 6px rgba(84, 72, 203, 0.2);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  font-size: 15px;
  box-shadow: none;
  white-space: normal;
  border: none;
  border-radius: 8px;
  font-weight: 500;
  z-index: 1;
  overflow: visible;
  text-overflow: ellipsis;
  position: relative;
  padding: 6px 20px;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  :hover {
    opacity: 0.8;
  }
`;

export const Login = styled(Button)`
  margin-top: 10px;

  background-color: ${colors.Main};
  color: ${colors.White};

  :disabled {
    background: #f1f2f4;
    color: #adacb0;
  }
`;

export const LogoWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 200px;
`;

export const SubTitle = styled.h3`
  font-size: 18px;
  margin-top: 8px;
  margin-bottom: 48px;
  color: ${colors.Main};
  text-align: center;
`;

export const Register = styled.a`
  font-size: 14px;
  margin-top: 30px;
  font-weight: 500;
  color: ${colors.Main};
  cursor: pointer;
`;
