import { Grid, Stack, Typography, IconButton } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@mui/icons-material/Person';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

import TelegramIcon from '@mui/icons-material/Telegram';
export const Footer = () => {
    const redes = [
        {
            name: 'telegram',
            url: 'https://t.me/botrixglobal',
            icon: <TelegramIcon />,
        },
        {
            name: 'instagram',
            url: 'https://www.instagram.com/aibotrix',
            icon: <InstagramIcon />,
        },
    ];

    return (
        <>
            <Grid
                container
                sx={{
                    backgroundColor: 'walmartColors.darkblue',
                    color: '#fff',
                    padding: '24px 12px',
                    maxWidth: '100%',
                }}
            >
                <Grid
                    item
                    xs={6}
                    sx={{ borderRight: '1px solid' }}
                >
                    <Stack
                        spacing={2}
                        sx={{ alignItems: 'end', marginRight: '8px', textAlign: 'right' }}
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                            sx={{ alignItems: 'center' }}
                        >
                            <PersonIcon />
                            <Typography
                                variant='caption'
                                component='div'
                            >
                                Liderando Team
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            spacing={1}
                            sx={{ alignItems: 'center' }}
                        >
                            <AccountBalanceIcon />
                            <Typography
                                variant='caption'
                                component='div'
                            >
                                Nos encontramos en toda la red
                            </Typography>
                        </Stack>
                    </Stack>
                </Grid>
                <Grid
                    item
                    xs={6}
                    sx={{ borderLeft: '1px solid' }}
                >
                    <Stack
                        spacing={2}
                        sx={{ marginLeft: '8px', alignItems: 'start' }}
                    >
                        <Stack
                            spacing={1}
                            sx={{ alignItems: 'start', maxWidth: '100%' }}
                        >
                            <Stack
                                direction='row'
                                spacing={1}
                                sx={{ alignItems: 'center' }}
                            >
                                <MailIcon />
                                <Typography
                                    variant='caption'
                                    component='div'
                                >
                                    Emails:
                                </Typography>
                            </Stack>
                            <Typography
                                variant='caption'
                                component='div'
                                sx={{ maxWidth: '100%', overflow: 'hidden' }}
                            >
                                - Soporte@botrix.ai (Soporte)
                            </Typography>
                            <Typography
                                variant='caption'
                                component='div'
                                sx={{ maxWidth: '100%', overflow: 'hidden' }}
                            >
                                - kirvi16@gmail.com (developer)
                            </Typography>
                        </Stack>
                        <Stack
                            direction='row'
                            sx={{ flexWrap: 'wrap' }}
                        >
                            {redes.map(({ icon, url }, index) => {
                                return (
                                    <IconButton
                                        key={'icon' + index}
                                        sx={{ color: '#fff' }}
                                        component='a'
                                        href={url}
                                        target='_blank'
                                    >
                                        {icon}
                                    </IconButton>
                                );
                            })}
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
            <Typography
                sx={{
                    backgroundColor: 'walmartColors.darkblue',
                    color: '#fff',
                    fontSize: '0.63em',
                }}
                variant='caption'
                textAlign='center'
                component='div'
            >
                Desarrollado por kirvi dev - 2023 - Copyright © Botrix.ai
            </Typography>
        </>
    );
};
