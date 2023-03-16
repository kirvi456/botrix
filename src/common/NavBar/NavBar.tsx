import React, { useContext, useState } from 'react';

import { Box, AppBar, Toolbar, IconButton, Grid, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import { Drawer } from './Drawer';

import botrixLogo from '../../assets/botrixlogo.png';

export const NavBar = () => {
    const navigation = useNavigate();

    const goHome = () => {
        navigation('/home');
    };

    // ############## DRAWER
    const [open, setOpen] = useState(false);

    const handleOpenChange = () => {
        setOpen(!open);
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar
                    position='fixed'
                    sx={{
                        backgroundColor: 'walmartColors.darkblue',
                        border: 0,
                        color: 'white',
                    }}
                >
                    <Toolbar>
                        <Grid
                            container
                            direction='row'
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <Grid>
                                <IconButton
                                    aria-label='menu'
                                    onClick={handleOpenChange}
                                    sx={{ color: 'white' }}
                                >
                                    <MenuIcon fontSize='large' />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <Stack
                                    direction='row'
                                    spacing={2}
                                    alignItems='center'
                                    sx={{ cursor: 'pointer' }}
                                    onClick={goHome}
                                >
                                    <img
                                        src={botrixLogo}
                                        alt='Walmart Logo'
                                        style={{
                                            maxWidth: '3.4em',
                                        }}
                                    />
                                </Stack>
                            </Grid>
                            <Grid item></Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Box>
            {/* Esta caja es para bajar el contenido y que no quede debajo del nav */}
            <Box height={60} />
            <Drawer
                open={open}
                handleOpenChange={handleOpenChange}
                rol={''}
            />
        </>
    );
};
