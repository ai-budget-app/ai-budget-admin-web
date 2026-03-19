import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 80px 24px;
`;

const SectionInner = styled.div`
  max-width: 72rem;
  margin: 0 auto;
`;

const SectionHeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.palette.text.primary};

  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

const SectionDescription = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: 1.125rem;
  max-width: 42rem;
  margin: 0 auto;
`;

export const Section = ({ id, children, ...props }) => {
  return (
    <SectionContainer id={id} {...props}>
      <SectionInner>{children}</SectionInner>
    </SectionContainer>
  );
};

export const SectionHeader = ({ title, description }) => {
  return (
    <SectionHeaderContainer>
      <SectionTitle>{title}</SectionTitle>
      {description && <SectionDescription>{description}</SectionDescription>}
    </SectionHeaderContainer>
  );
};
