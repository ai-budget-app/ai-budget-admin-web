import { TextField } from '@mui/material'
import styled from 'styled-components'

export const FieldBase = styled(TextField)`
  && {
    .MuiInputBase-root {
      border-radius: 12px;
      background: ${({ theme }) =>
        theme.palette.mode === 'dark'
            ? theme.palette.background.paper
            : theme.palette.background.default};
      width: 100%;
    }

    .MuiInputLabel-root {
      color: ${({ theme }) => theme.palette.text.secondary};
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: ${({ theme }) => theme.palette.divider};
    }

    /* Фокус состояние */
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-width: 2px;
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;