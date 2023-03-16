import { Skeleton, Stack, Container } from '@mui/material';
import React from 'react';

export const InfoEskeleton = () => {
    return (
        <Container sx={{ pt: 6, pb: 6 }}>
            <Stack
                alignItems='center'
                spacing={1}
            >
                <Skeleton
                    variant='circular'
                    width={180}
                    height={180}
                />
                <Skeleton
                    variant='rectangular'
                    height={50}
                    width={200}
                />
                <Skeleton
                    variant='rectangular'
                    height={20}
                    width={500}
                    sx={{ maxWidth: '90%' }}
                />
                <Skeleton
                    variant='rectangular'
                    height={50}
                    width={700}
                    sx={{ maxWidth: '90%' }}
                />
                <Skeleton
                    variant='rectangular'
                    height={300}
                    width={700}
                    sx={{ maxWidth: '90%' }}
                />
                <Skeleton
                    variant='rectangular'
                    height={300}
                    width={700}
                    sx={{ maxWidth: '90%' }}
                />
                <Skeleton
                    variant='rectangular'
                    height={300}
                    width={700}
                    sx={{ maxWidth: '90%' }}
                />
            </Stack>
        </Container>
    );
};
