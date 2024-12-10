import React, { useState } from 'react';
import { Box, Button, Card, Grid, TextField, Typography, IconButton, InputAdornment } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, Link } from 'react-router-dom';
import Bg from './bg.jpg';

export default function Login() {
  const [uname, setUname] = useState('');
  const [pass, setPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!uname) {
      toast.error("Please enter a Username!");
      return;
    }
    if (!pass) {
      toast.error("Please enter a Password!");
      return;
    }
    toast.success("Login Successful!");
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <Box
        display='flex'
        justifyContent='left'
        alignItems='center'
        minHeight='100vh'
        sx={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#e0f7fa',
        }}
      >
        <Card
          sx={{
            width: 350,
            padding: '3rem',
            height:449,
            borderRadius: '20px',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(20px)',
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
            margin: '-10rem 1rem 0 2rem',
          }}
        >
          <Typography variant='h3' align='center' color='#004d61' gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome Back
          </Typography>
          <Typography variant='body1' align='center' color='#555' sx={{ mb: 4, letterSpacing: 1.2 }}>
            Login to access your dashboard and manage your account
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Username"
                  variant="filled"
                  fullWidth
                  value={uname}
                  onChange={(e) => setUname(e.target.value)}
                  sx={{ mb: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  variant="filled"
                  fullWidth
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  sx={{ mb: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 2,
                    py: 1.5,
                    backgroundColor: '#00796b',
                    borderRadius: '30px',
                    fontSize: '1.2rem',
                    '&:hover': { backgroundColor: '#004d40' },
                  }}
                >
                  Login
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography variant='body2' align='center' color='#333' sx={{ mt: 3 }}>
                  Don't have an account?{' '}
                  <Link to="/register" style={{ textDecoration: 'none', color: '#00796b', fontWeight: 'bold' }}>
                    Register Now
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Box>
      <ToastContainer />
    </div>
  );
}
