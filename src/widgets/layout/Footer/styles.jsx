import styled from 'styled-components';

export const FooterContainer = styled.footer`
  border-top: 1px solid ${({ theme }) => theme.palette.divider};
  padding: 24px;
`;

export const FooterContent = styled.div`
  max-width: 96rem;
  margin: 0 auto;
  text-align: center;
`;

export const FooterText = styled.span`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.palette.text.secondary};
`;