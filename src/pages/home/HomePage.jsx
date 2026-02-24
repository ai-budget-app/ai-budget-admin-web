import styled from 'styled-components';
import { PageContainer } from '@/shared/ui/PageContainer';

const Title = styled.h1`
  color: ${({ theme }) => theme.palette.text.primary};
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin-top: 80px;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <Title>Страница в разработке 🚧</Title>
    </PageContainer>
  );
};

export default HomePage;