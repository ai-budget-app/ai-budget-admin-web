import styled from 'styled-components';

export const AboutGrid = styled.div`
  display: grid;
  gap: 32px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const AboutIconWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const AboutTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.palette.text.primary};
`;

export const AboutDescription = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;