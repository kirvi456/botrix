import React, { useContext } from 'react';
import { Container, Stack, Typography, Button } from '@mui/material';
import noconnected from '../../assets/noconnected.svg';
import { AuthContext } from '../../connection/context/Connection.context';

export const NoConnected = () => {
    const { login } = useContext(AuthContext);

    return (
        <Container>
            <Stack
                alignItems='center'
                justifyContent='center'
                sx={{
                    height: 'calc(100vh - 64px)',
                }}
                spacing={1}
            >
                <img
                    src={noconnected}
                    style={{
                        width: 400,
                        maxWidth: '50%',
                    }}
                />
                <Typography
                    variant='h3'
                    textAlign='center'
                >
                    No connected
                </Typography>
                <Typography textAlign='center'>
                    Please download Metamask or TrustWallect and conect them to the app
                </Typography>
                <Button onClick={login}>Connect</Button>
            </Stack>
        </Container>
    );
};
