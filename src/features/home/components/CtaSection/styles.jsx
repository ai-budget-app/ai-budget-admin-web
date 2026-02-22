import styled from 'styled-components';

export const CtaSectionContainer = styled.section`
  padding: 80px 24px;
`;

export const CtaInner = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
`;

export const CtaGradientBox = styled.div`
  background: linear-gradient(to bottom right, #3b82f6, #4f46e5);
  border-radius: 24px;
  padding: 64px 48px;
  color: #fff;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 80px 64px;
  }
`;

export const CtaTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CtaDescription = styled.p`
  color: #bfdbfe;
  font-size: 1.125rem;
  margin-bottom: 32px;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
`;