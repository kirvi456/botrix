import { Container, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import botrixLogo from '../../assets/botrixLogo.png';

export const DateCountDown = () => {
    const [date, setDate] = useState(Math.trunc((1677045600000 - new Date().getTime()) / 1000));

    useEffect(() => {
        setTimeout(() => setDate(date - 1), 1000);
    }, [date]);

    //minutos = segundos / 60
    //horas = minutos / 60
    //dias = horas / 24

    let current = date;
    const dias = Math.trunc(current / 86400);
    current = current - dias * 86400;
    const horas = Math.trunc(current / 3600);
    current = current - horas * 3600;
    const minutos = Math.trunc(current / 60);
    current = current - minutos * 60;

    return (
        <Container>
            <Stack
                alignItems='center'
                spacing={3}
            >
                <img
                    src={botrixLogo}
                    alt='Botrix Logo'
                    style={{
                        width: 200,
                        maxWidth: '30%',
                    }}
                />
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
                <Typography
                    color='text.primary'
                    textAlign='center'
                >
                    Remaining time to start the best NLP education tool and Trading with world-class
                    educators in addition to having a contract system that allows you to receive
                    rewards of up to $327,360 thanks to our 2X10 forced matrix.
                </Typography>
                <Typography
                    color='text.primary'
                    variant='caption'
                    textAlign='center'
                    sx={{ pl: 4, pr: 4 }}
                >
                    Tiempo restante para dar inicio a la mejor herramienta de educación en PNL y
                    Trading con educadores de clase mundial además de contar con un contrato
                    inteligente que permite recibir recompensas de hasta $327,360 dólares gracias a
                    nuestra matriz forzada de 2X10.
                </Typography>
            </Stack>
        </Container>
    );
};
