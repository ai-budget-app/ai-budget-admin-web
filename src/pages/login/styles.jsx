import styled from 'styled-components';
import { PageContainer } from '@/shared/ui/PageContainer';

export const Layout = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 700px;
  background: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);

  @media (max-width: 600px) {
    padding: 24px 18px;
    border-radius: 18px;
    gap: 20px;
  }
`;

export const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const BrandLogo = styled.img`
  width: 38px;
  height: 38px;
`;

export const BrandName = styled.span`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
  letter-spacing: 0.01em;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
