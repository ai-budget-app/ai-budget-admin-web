import styled from 'styled-components';
import {
  Card as MuiCard,
  CardHeader as MuiCardHeader,
  CardContent as MuiCardContent,
} from '@mui/material';

export const Card = styled(MuiCard)`
  && {
    border-radius: 12px;
    border: 1px solid ${({ theme }) => theme.palette.divider};
    background: ${({ theme }) => theme.palette.background.paper};
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  }
`;

export const CardHeader = styled(MuiCardHeader)`
  && {
    padding: 24px 24px 0 24px;
  }
`;

export const CardContent = styled(MuiCardContent)`
  && {
    padding: 16px 24px 24px 24px;
  }
`;