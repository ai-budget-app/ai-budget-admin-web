import { useState } from 'react'
import { IconButton, InputAdornment } from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { FormField } from '@/shared/ui/FormField'

export const PasswordField = ({ errorMessage, ...props }) => {
    const [showPassword, setShowPassword] = useState(false)

    return (
        <FormField
            {...props}
            type={showPassword ? 'text' : 'password'}
            errorMessage={errorMessage}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            onClick={() => setShowPassword((prev) => !prev)}
                            edge="end"
                            aria-label={showPassword ? 'Скрыть пароль' : 'Показать пароль'}
                        >
                            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    )
}