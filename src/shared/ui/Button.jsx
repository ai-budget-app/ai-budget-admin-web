import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

export const ButtonFilled = styled(MuiButton)`
  && {
    border-radius: 999px;
    text-transform: none;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 8px 20px;
    transition: all 0.2s ease;
  }
`;

export const ButtonOutlined = styled(MuiButton)`
  && {
    border-radius: 999px;
    text-transform: none;
    font-weight: 600;
    font-size: 0.875rem;
    padding: 8px 20px;
    transition: all 0.2s ease;
    background: transparent;
    border: 1.5px solid currentColor;
    
    &:hover {
      background: rgba(128, 128, 128, 0.1);
    }
  }
`;