import styled from 'styled-components';

export const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.text.primary};
  transition: background 0.3s ease, color 0.3s ease;
`;