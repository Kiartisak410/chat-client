import { Box, Button, Container, Divider, Grid, Paper, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Login = ({onSubmit, username, password}) => {

    const onLogin = () => {
        onSubmit()
    }

    return (
        <>
            <Container fixed sx={{
                width: '25%'
            }}>
                <Paper mt={5} sx={{
                    padding: '1%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    marginTop: '15%'
                }}>
                    <Box sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}>
                        <Typography variant="h4">
                            Login
                        </Typography>
                        <Divider />
                        <Box sx={{
                            marginTop: '3%',
                            display: 'flex',
                            flexDirection: 'column',
                            paddingLeft: '15%',
                            paddingRight: '15%'
                        }}>
                            <TextField label="User Name" onChange={(e) => username(e.target.value)} />
                            <TextField sx={{marginTop: '5%'}} label="Password" type="password" onChange={(e) => password(e.target.value)}/>
                            <Button onClick={onLogin}>
                                Login
                            </Button>
                        </Box>

                    </Box>
                </Paper>
            </Container>
        </>
    );
}

export default Login;