import styled from 'styled-components';

export const FaqContainer = styled.div`
  max-width: 48rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FaqItem = styled.div`
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 16px;
  background: ${({ theme }) => theme.palette.background.paper};
  overflow: hidden;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const FaqQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 1rem;
  font-weight: 600;
  gap: 16px;
`;

export const FaqAnswer = styled.div`
  padding: 0 24px 20px;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 0.95rem;
  line-height: 1.7;
`;

export const IconWrapper = styled.div`
  flex-shrink: 0;
  color: ${({ theme }) => theme.palette.primary.main};
`;