import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 64px 32px 64px;
`;

export const HomePageTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const WelcomeName = styled.span`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.palette.primary.main},
    ${({ theme }) => (theme.palette.mode === 'dark' ? '#64b5f6' : '#1565c0')}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const WelcomeSubtitle = styled.p`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.palette.text.secondary};
  text-align: center;
  margin-bottom: 52px;
`;

export const AppNameLink = styled(Link)`
  font-weight: 700;
  color: ${({ theme }) => theme.palette.primary.main};
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.75;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;