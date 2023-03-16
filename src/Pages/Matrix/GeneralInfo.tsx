import React, { useState, useContext } from 'react';
import { LoadingButton } from '@mui/lab';
import { Paper, Stack, Typography, Grid, Button } from '@mui/material';
import { useNotification } from '../../hooks/useNotification';
import { countInformation } from './types';
import { URLSContext } from '../../context/URLs.context';
import { AuthContext } from '../../connection/context/Connection.context';

type GeneralInfoProps = {
    countInfo: countInformation;
    level: number;
    contract: any;
    getInformation: () => Promise<void>;
};

export const GeneralInfo: React.FC<GeneralInfoProps> = ({
    countInfo,
    level,
    contract,
    getInformation,
}) => {
    const [loading, setLoading] = useState<boolean>(false);

    const { connectionState } = useContext(AuthContext);

    const { currentAccount } = connectionState;

    const { openSuccessNotification } = useNotification();

    const handleCopy = async () => {
        await navigator.clipboard.writeText(
            `https://botrix.ai/shop?ref${level}=${countInfo.currentAccount}`
        );
        openSuccessNotification('Copied');
    };

    const handleWithdraw = async () => {
        try {
            setLoading(true);
            await contract.methods.withdraw().send({
                from: currentAccount,
                gas: 300000,
            });
            openSuccessNotification(`Withdrawed`);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <Stack
            spacing={2}
            alignItems='center'
            sx={{ width: 700, maxWidth: '95%' }}
        >
            <Paper
                sx={{
                    width: 600,
                    maxWidth: '90%',
                    p: 2,
                    backgroundColor: 'walmartColors.darkblue',
                }}
                elevation={12}
            >
                <Stack
                    direction='row'
                    justifyContent='end'
                >
                    Total Withdrawed: {countInfo.withdrawed} USDT
                </Stack>
            </Paper>
            <Paper sx={{ width: 600, maxWidth: '90%', p: 2 }}>
                <Stack spacing={1}>
                    <Grid container>
                        <Grid
                            item
                            xs={8}
                        >
                            <Typography>Referral withdraw:</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                        >
                            <Typography> {countInfo.referralWithDraw} USDT</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={8}
                        >
                            <Typography>Matrix withdraw:</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                        >
                            <Typography> {countInfo.matrixWithDraw} USDT</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={8}
                        >
                            <Typography>Total Available to Withdraw:</Typography>
                        </Grid>
                        <Grid
                            item
                            xs={4}
                        >
                            <Typography>
                                {' '}
                                {(
                                    Number(countInfo.referralWithDraw) +
                                    Number(countInfo.matrixWithDraw)
                                ).toFixed(2)}{' '}
                                USDT
                            </Typography>
                        </Grid>
                    </Grid>
                    <LoadingButton
                        variant='contained'
                        loading={loading}
                        onClick={handleWithdraw}
                    >
                        Withdraw
                    </LoadingButton>
                </Stack>
            </Paper>
            {/* <Paper sx={{ width: 600, maxWidth: '90%', p: 2 }}>
                <Stack spacing={1}>
                    <Typography variant='h6'>Sponsor</Typography>

                    <Typography
                        variant='caption'
                        textAlign='center'
                        sx={{
                            pl: 2,
                            pr: 2,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            maxWidth: '100%',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        {countInfo.sponsor}
                    </Typography>

                    <Typography
                        variant='caption'
                        textAlign='center'
                        sx={{
                            pl: 2,
                            pr: 2,
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            maxWidth: '100%',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        Sponsor Token No 5
                    </Typography>
                </Stack>
            </Paper> */}
            <Paper sx={{ width: 600, maxWidth: '90%', p: 2 }}>
                <Stack spacing={1}>
                    <Typography variant='h6'>My Link</Typography>

                    <Typography
                        variant='caption'
                        textAlign='center'
                        sx={{
                            pl: 2,
                            pr: 2,
                            textOverflow: 'clip',
                            overflow: 'hidden',
                            maxWidth: '100%',
                        }}
                    >
                        https://botrix.ai/shop?ref{level}={countInfo.currentAccount}
                    </Typography>

                    <Button
                        variant='text'
                        onClick={handleCopy}
                    >
                        Copy
                    </Button>
                </Stack>
            </Paper>
            <Stack
                alignItems='left'
                sx={{ width: 600, maxWidth: '90%' }}
            >
                <Typography variant='h6'>Referred</Typography>
                <Stack
                    spacing={1}
                    sx={{ ml: 2, mr: 2 }}
                >
                    {countInfo.referred.map((referred, index) => (
                        <Paper
                            sx={{ width: 600, maxWidth: '100%', p: 1 }}
                            key={index}
                        >
                            <Typography
                                variant='caption'
                                sx={{
                                    pl: 2,
                                    pr: 2,
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    maxWidth: '100%',
                                    whiteSpace: 'nowrap',
                                }}
                                component='div'
                            >
                                {referred}
                            </Typography>
                        </Paper>
                    ))}
                </Stack>
            </Stack>
        </Stack>
    );
};
