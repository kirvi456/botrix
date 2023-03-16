import React from 'react';
import { Container, Stack, Typography, Button } from '@mui/material';

import buy from '../../assets/buy.svg';
import { useNavigate } from 'react-router-dom';

export const NoOnGame = () => {
    const navigate = useNavigate();

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
                    src={buy}
                    style={{
                        width: 400,
                        maxWidth: '50%',
                    }}
                />
                <Typography
                    variant='h3'
                    textAlign='center'
                >
                    No on the game
                </Typography>
                <Typography textAlign='center'>Please buy this level first</Typography>
                <Button
                    onClick={() => {
                        navigate('/shop');
                    }}
                >
                    Go to shopping
                </Button>
            </Stack>
        </Container>
    );
};
