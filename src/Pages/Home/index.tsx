import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../connection/context/Connection.context';

import { Box, Button, Container, Grid, Link, Stack, Typography, Paper } from '@mui/material';

import banner from '../../assets/banner.jpg';
import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.svg';
import img3 from '../../assets/img3.svg';
import img4 from '../../assets/img4.png';
import img6 from '../../assets/img6.gif';

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { URLSContext } from '../../context/URLs.context';

import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Footer } from './Footer';
import { graphviz } from 'd3-graphviz';

export const HomePage = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const { connectionState, login } = useContext(AuthContext);

    const { currentAccount, isConnected, isInstalled, networkID } = connectionState;

    const handleLogin = async () => {
        const res = await login();
    };

    const { USDTContract } = useContext(URLSContext);
    const [prueba, setPrueba] = useState<string>('ss');

    useEffect(() => {
        const ff = async () => {
            const res = await USDTContract.methods.getOwner().call();
            setPrueba(res);
        };
        if (USDTContract) {
            ff();
        }
    }, [USDTContract]);

    return (
        <Container
            sx={{ overflow: 'hidden', p: 0 }}
            maxWidth='xl'
        >
            {/* <Stack>
                <Button onClick={login}>Conectar</Button>
            </Stack>
            {JSON.stringify({ currentAccount, isConnected, isInstalled, networkID })} */}

            {/* <Typography>{prueba}</Typography> */}

            <Stack sx={{ position: 'relative' }}>
                <img src={banner} />

                <Stack
                    sx={{
                        position: 'absolute',
                        margin: 'auto',
                        textAlign: 'center',
                        left: 0,
                        right: 0,
                        bottom: '15%',
                    }}
                    spacing={1}
                >
                    <Typography
                        variant={matches ? 'h6' : 'h1'}
                        textAlign='center'
                        sx={{
                            fontWeight: 800,
                            backgroundColor: 'rgba(0,0,0,0.7)',
                        }}
                    >
                        Botrix Smart Contract
                    </Typography>
                    <Typography
                        variant={matches ? 'h6' : 'h4'}
                        textAlign='center'
                        sx={{ opacity: 0.7, fontWeight: 500, backgroundColor: 'rgba(0,0,0,0.7)' }}
                    >
                        Welcome to the smart future for smart leaders!
                    </Typography>
                </Stack>
            </Stack>

            <Grid
                container
                justifyContent='center'
                alignItems='center'
                sx={{ mt: 2 }}
                spacing={2}
            >
                <Grid item>
                    <Box
                        sx={{
                            p: 2,
                            background:
                                'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
                            border: '1px solid white',
                            borderRadius: 2,
                        }}
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                            alignItems='center'
                        >
                            <InstagramIcon />
                            <Link
                                href='https://www.instagram.com/aibotrix/'
                                variant='button'
                                sx={{ color: 'white' }}
                                target='_blank'
                            >
                                Instagram
                            </Link>
                        </Stack>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            p: 2,
                            background: '#269cd9',
                            border: '1px solid white',
                            borderRadius: 2,
                        }}
                    >
                        <Stack
                            direction='row'
                            spacing={1}
                            alignItems='center'
                        >
                            <TelegramIcon />
                            <Link
                                href='https://t.me/botrixglobal'
                                variant='button'
                                sx={{ color: 'white' }}
                                target='_blank'
                            >
                                Telegram
                            </Link>
                        </Stack>
                    </Box>
                </Grid>
            </Grid>
            {/**timer */}
            {/* <Stack>
                <Typography
                    variant='h2'
                    textAlign='center'
                    sx={{ mt: 4 }}
                >
                    Registros por empezar
                </Typography>

                <Stack
                    direction='row'
                    spacing={2}
                    justifyContent='center'
                    marginTop='48px'
                >
                    <Stack alignItems='center'>
                        <Typography
                            color='text.primary'
                            variant='h6'
                        >
                            {dias < 10 ? '0' + dias : dias}
                        </Typography>
                        <Typography
                            color='text.primary'
                            variant='h6'
                        >
                            Days
                        </Typography>
                    </Stack>
                    <Stack alignItems='center'>
                        <Typography
                            color='text.primary'
                            variant='h6'
                        >
                            {horas < 10 ? '0' + horas : horas}
                        </Typography>
                        <Typography
                            color='text.primary'
                            variant='h6'
                        >
                            Hours
                        </Typography>
                    </Stack>
                    <Stack alignItems='center'>
                        <Typography
                            color='text.primary'
                            variant='h6'
                        >
                            {minutos < 10 ? '0' + minutos : minutos}
                        </Typography>
                        <Typography
                            color='text.primary'
                            variant='h6'
                        >
                            Minutes
                        </Typography>
                    </Stack>
                    <Stack alignItems='center'>
                        <Typography
                            color='text.primary'
                            variant='h6'
                        >
                            {current < 10 ? '0' + current : current}
                        </Typography>
                        <Typography
                            color='text.primary'
                            variant='h6'
                        >
                            Seconds
                        </Typography>
                    </Stack>
                </Stack>
            </Stack> */}
            {/**timer */}

            <Stack
                sx={{ mt: 12, pl: 6, pr: 6 }}
                spacing={3}
            >
                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid
                        item
                        sm={12}
                        md={6}
                        textAlign='center'
                    >
                        <img
                            src={img1}
                            style={{
                                width: 200,
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        md={6}
                        textAlign='center'
                    >
                        <Typography variant='h6'>Tecnología Descentralizada</Typography>
                        <Typography>
                            La tecnología descentralizada, como los contratos inteligentes, ofrece
                            una solución innovadora y segura para garantizar la transparencia y el
                            control total de las ganancias. A diferencia de las soluciones
                            centralizadas, la tecnología descentralizada funciona sin la necesidad
                            de intermediarios, lo que reduce los costos y el tiempo de transacción.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                    sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
                >
                    <Grid
                        item
                        sm={12}
                        md={6}
                        textAlign='center'
                    >
                        <Typography variant='h6'>Economia Colaborativa</Typography>
                        <Typography>
                            Una comunidad enfocada en el crecimiento económico de cada miembro,
                            gracias al modelo de economía colaborativa entre usuarios, se refiere a
                            una organización en la que sus miembros trabajan juntos para generar
                            riqueza y oportunidades de crecimiento económico compartido. Nuestra
                            comunidad utiliza la última tecnología web 3.0.
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        md={6}
                        textAlign='center'
                    >
                        <img
                            src={img2}
                            style={{
                                width: 200,
                            }}
                        />
                    </Grid>
                </Grid>

                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid
                        item
                        sm={12}
                        md={6}
                        textAlign='center'
                    >
                        <img
                            src={img3}
                            style={{
                                width: 200,
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        md={6}
                        textAlign='center'
                    >
                        <Typography variant='h6'>Educación de PNL</Typography>
                        <Typography>
                            La educación de PNL es un entrenamiento enfocado en cómo utilizar la
                            mente y el lenguaje de manera más efectiva para alcanzar objetivos y
                            mejorar relaciones. Su objetivo es ayudar a las personas a dejar atrás
                            ataduras mentales y a desarrollar habilidades de liderazgo. Se lleva a
                            cabo a través de cursos y talleres donde se enseñan técnicas específicas
                            para mejorar el pensamiento, comportamiento y comunicación.
                        </Typography>
                    </Grid>
                </Grid>

                <Stack spacing={2}>
                    <Typography
                        variant='h4'
                        sx={{ color: '#fffd00', fontWeight: '600' }}
                    >
                        Participación en coleccion NFT- 5 diferentes colecciones
                    </Typography>
                    <Grid
                        container
                        alignItems='center'
                        justifyContent='center'
                        spacing={2}
                    >
                        <Grid
                            item
                            sm={12}
                            md={6}
                            textAlign='center'
                        >
                            <img
                                src={img4}
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            sm={12}
                            md={6}
                        >
                            <Stack spacing={4}>
                                <Stack>
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <Typography
                                            variant='h5'
                                            sx={{ opacity: 0.8, fontWeight: 800 }}
                                        >
                                            01
                                        </Typography>
                                        <Typography variant='h5'>NFT Transferible</Typography>
                                    </Stack>
                                    <Typography sx={{ pl: 4 }}>
                                        Puedes enviar y vender tus NFT
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <Typography
                                            variant='h5'
                                            sx={{ opacity: 0.8, fontWeight: 800 }}
                                        >
                                            02
                                        </Typography>
                                        <Typography variant='h5'>Paquete de inicio</Typography>
                                    </Stack>
                                    <Typography sx={{ pl: 4 }}>
                                        Construimos modelos financieros para presentar a los
                                        inversores
                                    </Typography>
                                </Stack>
                                <Stack>
                                    <Stack
                                        direction='row'
                                        spacing={1}
                                    >
                                        <Typography
                                            variant='h5'
                                            sx={{ opacity: 0.8, fontWeight: 800 }}
                                        >
                                            03
                                        </Typography>
                                        <Typography variant='h5'>Gestión de patrimonio</Typography>
                                    </Stack>
                                    <Typography sx={{ pl: 4 }}>
                                        Proporcionamos servicios de asesoramiento de inversión bien
                                        pensados
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>

                <Grid
                    container
                    alignItems='center'
                    justifyContent='center'
                >
                    <Grid
                        item
                        sm={12}
                        md={6}
                        textAlign='center'
                    >
                        <img
                            src={img6}
                            style={{
                                width: 300,
                            }}
                        />
                    </Grid>
                    <Grid
                        item
                        sm={12}
                        md={6}
                        textAlign='center'
                    >
                        <Stack spacing={2}>
                            <Typography variant='h4'>Que ofrece BOTRIX?</Typography>
                            <Stack>
                                <Typography>-5 Colecciones unicas</Typography>
                                <Typography>-Sistema educativo</Typography>
                                <Typography>-Contrato inteligente</Typography>
                                <Typography>-2% de ganancia directa</Typography>
                                <Typography>-8% de cada nivel de la matriz</Typography>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
            <Footer />
        </Container>
    );
};
