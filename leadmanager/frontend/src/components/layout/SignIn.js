import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom';

const theme = createTheme();

import CsrfToken from '../../services/CsrfToken'

export default function SignIn() {


    {/* <input type="hidden" name="csrfmiddlewaretoken" value={getCookie('csrftoken')} /> */ }


    console.log({CsrfToken})


    return (

        <div style={{ paddingTop: "100px" }}>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box
                    component="form"
                    action='accounts/login'
                    method='post'
                    href='accounts/login'
                    noValidate sx={{ mt: 1 }}
                >



                    {/* Token  */}
                    {/* <CsrfToken /> */}

                    {/* Username  */}

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="text"
                        label="Username"
                        name="username"
                        autoComplete="Username"
                        autoFocus
                    />

                    {/* Password  */}

                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>

                </Box>
            </Box>
        </div>

    );
}