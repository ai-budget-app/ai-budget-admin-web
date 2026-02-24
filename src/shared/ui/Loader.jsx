import styled from 'styled-components';
import CircularProgress from '@mui/material/CircularProgress';

const LoaderWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.palette.background.default};
`;

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const LoaderText = styled.p`
  color: ${({ theme }) => theme.palette.text.secondary};
  margin: 0;
`;

export const Loader = ({ text = 'Загрузка...' }) => (
  <LoaderWrapper>
    <LoaderContent>
      <CircularProgress color="primary" />
      <LoaderText>{text}</LoaderText>
    </LoaderContent>
  </LoaderWrapper>
);