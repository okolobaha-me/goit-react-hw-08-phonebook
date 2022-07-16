import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  padding: 0 5px;
  position: relative;
  cursor: pointer;

  &::after {
    position: absolute;
    left: 0;
    bottom: -15px;
    content: '';
    width: 100%;
    height: 5px;
    background-color: #ffffff;
    border-radius: 5px 5px 0 0;
    transform: scaleY(0);
    transition: all 200ms cubic-bezier(0.32, -0.01, 0.35, 1.02);
    opacity: 0;
  }

  &.active::after {
    transform: scaleY(100%);
    opacity: 1;
  }
`;
