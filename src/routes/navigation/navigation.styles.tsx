import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  height: 100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid gray;

  @media screen and (max-width: 800px) {
    height: 70px;
    padding: 10px 20px;
    margin-bottom: 15px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 200px;

  @media screen and (max-width: 800px) {
    width: 100px;
  }

  > * {
    height: 100%;
    width: 100%;
  }
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
