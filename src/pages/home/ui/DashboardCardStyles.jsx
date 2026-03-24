import styled from 'styled-components';
import { Card, CardContent } from '@/shared/ui/Card';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export const HoverCard = styled(Card)`
  && {
    height: 100%;
    cursor: default;
    transition:
      transform 0.2s ease,
      box-shadow 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.14);
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const StyledCardContent = styled(CardContent)`
  && {
    padding: 32px !important;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.75rem;
  margin-bottom: 16px;
  line-height: 1;
  color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: center;
`;

export const Description = styled(Typography)`
  && {
    flex: 1;
    margin-bottom: 20px;
  }
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
  text-decoration: none;
  margin-top: auto;

  &:hover {
    text-decoration: underline;
  }
`;