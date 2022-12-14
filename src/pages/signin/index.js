import React, { useState, useEffect } from 'react'
import Footer from '../../components/assist/footer'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import SendIcon from '@mui/icons-material/Send'
import useAuth from '../../utils/hooks/useAuth'
import HandsPeoples from '../../components/assets/handspeoples.jpg'
import { Navigate, useNavigate } from 'react-router-dom'

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      Todos os direitos reservados
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const theme = createTheme()
const Signin = () => {
  const { signin } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [error, setError] = useState('')

  const handleLogin = () => {
    if (!email | !senha) {
      setError('Preencha todos os campos')
      return
    }

    const res = signin(email, senha)

    if (res) {
      setError(res)
      return
    }

    navigate('/dashboard')
  }

  return (
    <>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${HandsPeoples})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Fazer login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => [setEmail(e.target.value), setError('')]}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                type="password"
                value={senha}
                onChange={(e) => [setSenha(e.target.value), setError('')]}
                id="password"
                autoComplete="current-password"
              />

              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 10, mb: 2 }}
                onClick={handleLogin}
                endIcon={<SendIcon />}
              >
                Fazer Login
              </Button>

              <Copyright sx={{ mt: 40 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  )
}

export default Signin
