import { useMemo, useState } from 'react'
import { Alert, Button, CircularProgress, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Layout, LoginCard, Brand, BrandLogo, BrandName, Header, Form } from './LoginStyles'
import { FormField } from '@/shared/ui/FormField'
import { PasswordField } from '@/shared/ui/PasswordField'
import { useLoginMutation } from '@/entities/auth/api/authApi'
import logo from '@/assets/zenny.svg'
import { PATHS } from '@/app/routes/paths'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PASSWORD_REGEX = /^.{6,}$/

const LoginPage = () => {
    const navigate = useNavigate()
    const [login, { isLoading }] = useLoginMutation()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const [touched, setTouched] = useState({
        email: false,
        password: false,
    })

    const [requestError, setRequestError] = useState('')

    const errors = useMemo(() => {
        const emailError = EMAIL_REGEX.test(form.email)
            ? ''
            : 'Введите корректный email в формате name@example.com'

        const passwordError = PASSWORD_REGEX.test(form.password)
            ? ''
            : 'Пароль должен содержать минимум 6 символов'

        return {
            email: emailError,
            password: passwordError,
        }
    }, [form.email, form.password])

    const isValid = !errors.email && !errors.password

    const onChangeField = (name) => (event) => {
        setForm((prev) => ({
            ...prev,
            [name]: event.target.value,
        }))
        setRequestError('')
    }

    const onBlurField = (name) => () => {
        setTouched((prev) => ({
            ...prev,
            [name]: true,
        }))
    }

    const handleLogin = async () => {
        setTouched({
            email: true,
            password: true,
        })

        if (!isValid) return

        try {
            const response = await login(form).unwrap()

            if (response?.token) {
                localStorage.setItem('token', response.token)
            }

            setRequestError('')
            console.log('LOGIN SUCCESS', response)

            navigate(PATHS.HOME)
        } catch (error) {
            setRequestError(
                error?.data?.message ||
                'Не удалось выполнить вход. Проверьте email и пароль.'
            )
        }
    }

    return (
        <Layout>
            <LoginCard>
                <Brand>
                    <BrandLogo src={logo} alt="Zenny logo" />
                    <BrandName>Zenny</BrandName>
                </Brand>

                <Header>
                    <Typography variant="h4" component="h1" fontWeight={700}>
                        Добро пожаловать!
                    </Typography>

                    <Typography variant="body1" color="text.secondary">
                        Введите данные для входа
                    </Typography>
                </Header>

                <Form>
                    <FormField
                        label="Почта"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChangeField('email')}
                        onBlur={onBlurField('email')}
                        autoComplete="email"
                        errorMessage={touched.email ? errors.email : ''}
                    />

                    <PasswordField
                        label="Пароль"
                        name="password"
                        value={form.password}
                        onChange={onChangeField('password')}
                        onBlur={onBlurField('password')}
                        autoComplete="current-password"
                        errorMessage={touched.password ? errors.password : ''}
                    />

                    {requestError && <Alert severity="error">{requestError}</Alert>}

                    <Button
                        type="button"
                        variant="contained"
                        fullWidth
                        disabled={isLoading}
                        sx={{ height: 46 }}
                        onClick={handleLogin}
                    >
                        {isLoading ? (
                            <CircularProgress size={22} color="inherit" />
                        ) : (
                            'Войти'
                        )}
                    </Button>
                </Form>
            </LoginCard>
        </Layout>
    )
}

export default LoginPage