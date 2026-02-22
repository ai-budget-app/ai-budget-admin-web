import styled from 'styled-components';
import { AppBar, Toolbar } from '@mui/material';

export const HeaderContainer = styled(AppBar)`
  && {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 50;
    background: ${({ theme }) => theme.palette.mode === 'dark'
      ? 'rgba(15, 20, 40, 0.75)'
      : 'rgba(30, 80, 180, 0.65)'};
    border-radius: 999px;
    width: auto;
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid ${({ theme }) => theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, 0.12)'
      : 'rgba(255, 255, 255, 0.35)'};
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);
    padding-left: 8px;
    padding-right: 8px;
    padding-top: 6px;
    padding-bottom: 6px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-left: 8px;
`;

export const LogoImg = styled.img`
  width: 32px;
  height: 32px;
`;

export const LogoText = styled.span`
  font-weight: 600;
  font-size: 1.125rem;
  color: #ffffff;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0 8px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const NavLinkStyled = styled.a`
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 0.875rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const HeaderToolbar = styled(Toolbar)`
  && {
    min-height: unset;
    padding-left: 16px;
    padding-right: 16px;
    width: 100%;
    position: relative;
  }
`;

export const NavCentered = styled(Nav)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const ActionsFull = styled(Actions)`
  margin-left: auto;
`;