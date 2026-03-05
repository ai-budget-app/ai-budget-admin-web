import { useMemo, useState } from 'react'
import styled from 'styled-components'
import { Alert, Button, CircularProgress, Typography } from '@mui/material'
import { PageContainer } from '@/shared/ui/PageContainer'
import { FormField } from '@/shared/ui/FormField'
import { PasswordField } from '@/shared/ui/PasswordField'
import { useLoginMutation } from '@/entities/auth/api/authApi'
import logo from '@/assets/zenny.svg'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+.[^\s@]+$/
const PASSWORD_REGEX = /^.{6,}$/

const Layout = styled(PageContainer)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const LoginCard = styled.div`
  width: 100%;
  max-width: 700px;
  background: ${({ theme }) => theme.palette.background.paper};
  border: 1px solid ${({ theme }) => theme.palette.divider};
  border-radius: 24px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 26px;
  box-shadow: 0 20px 48px rgba(0, 0, 0, 0.12);

  @media (max-width: 600px) {
    padding: 24px 18px;
    border-radius: 18px;
    gap: 20px;
  }
`

const Brand = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`

const BrandLogo = styled.img`
  width: 38px;
  height: 38px;
`

const BrandName = styled.span`
  font-size: 1.375rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};
  letter-spacing: 0.01em;
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const LoginPage = () => {
    const [login, { isLoading }] = useLoginMutation()
    const [form, setForm] = useState({ email: '', password: '' })
    const [touched, setTouched] = useState({ email: false, password: false })
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
        setForm((prev) => ({ ...prev, [name]: event.target.value }))
        setRequestError('')
    }

    const onBlurField = (name) => () => {
        setTouched((prev) => ({ ...prev, [name]: true }))
    }

    const onSubmit = async (event) => {
        event.preventDefault()
        setTouched({ email: true, password: true })

        if (!isValid) {
            return
        }

        try {
            await login(form).unwrap()
        } catch {
            setRequestError('Не удалось выполнить вход. API используется как заглушка.')
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

                <Form onSubmit={onSubmit} noValidate>
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

                    {requestError ? <Alert severity="error">{requestError}</Alert> : null}

                    <Button type="submit" variant="contained" fullWidth disabled={isLoading} sx={{ height: 46 }}>
                        {isLoading ? <CircularProgress size={22} color="inherit" /> : 'Войти'}
                    </Button>
                </Form>
            </LoginCard>
        </Layout>
    )
}

export default LoginPage