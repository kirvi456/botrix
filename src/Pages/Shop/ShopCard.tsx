import React, { useContext, useState, useEffect } from 'react';
import { Divider, Paper, Stack, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LoadingButton } from '@mui/lab';

import LVL1 from '../../assets/LVL1.jpg';
import LVL2 from '../../assets/LVL2.jpg';
import LVL3 from '../../assets/LVL3.jpg';
import LVL4 from '../../assets/LVL4.jpg';
import LVL5 from '../../assets/LVL5.jpg';
import { ShopCardProps } from './types';
import { useNotification } from '../../hooks/useNotification';
import { URLSContext } from '../../context/URLs.context';
import { AuthContext } from '../../connection/context/Connection.context';
import { useNavigate } from 'react-router-dom';

export const ShopCard: React.FC<ShopCardProps> = ({
    state,
    lvl,
    price,
    contractDir,
    sponsor,
    contract,
}) => {
    const navigate = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);

    const { openErrorNotification, openSuccessNotification } = useNotification();
    const { USDTContract } = useContext(URLSContext);

    const { connectionState } = useContext(AuthContext);

    const { currentAccount } = connectionState;

    const getIMG = () => {
        switch (lvl) {
            case 1:
                return LVL1;
            case 2:
                return LVL2;
            case 3:
                return LVL3;
            case 4:
                return LVL4;
            case 5:
                return LVL5;
            default:
                return LVL5;
        }
    };

    const handleBuy = async () => {
        try {
            setLoading(true);
            const availableUSDT = await USDTContract.methods.balanceOf(currentAccount).call();
            if (availableUSDT < price * 1000000000000000000) {
                openErrorNotification('No enough money (USDT) available');
                return;
            }
            await USDTContract.methods
                .approve(contractDir, (price * 1000000000000000000).toString())
                .send({
                    from: currentAccount,
                    gas: 300000,
                });
            await contract.methods.buy(sponsor).send({
                from: currentAccount,
                gas: 2000000,
            });
            openSuccessNotification(`Joined to collection ${lvl}`);
            setTimeout(() => {
                navigate('/matrix' + lvl);
            }, 1600);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    const setSponsorInGame = async () => {
        try {
            const isRefOnGame = await contract.methods.players(sponsor).call();
            if (isRefOnGame == 0) setError(true);
        } catch (error) {
            console.log(error);
            setError(true);
        }
    };

    useEffect(() => {
        if (contract) setSponsorInGame();
    }, [contract]);

    return (
        <Paper
            sx={{
                width: 180,
                overflow: 'hidden',
                position: 'relative',
                borderColor: state === 'buyed' ? 'success.main' : '',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    pl: 1,
                    pr: 1,
                    backgroundColor: 'secondary.main',
                    borderRadius: 16,
                    m: 1,
                }}
            >
                <Typography
                    variant='caption'
                    sx={{
                        color: 'black',
                        fontWeight: '800',
                    }}
                >
                    NFT
                </Typography>
            </Box>
            <Stack spacing={1}>
                <img
                    src={getIMG()}
                    alt='lvl img'
                    style={{
                        width: '100%',
                    }}
                />
                <Stack
                    alignItems='center'
                    sx={{ backgroundColor: 'secondary.main', color: 'black' }}
                >
                    <Typography>Sponsor</Typography>
                    {state === 'buyed' ? (
                        <Typography variant='caption'>{`Already buyed`}</Typography>
                    ) : (
                        <Typography variant='caption'>
                            {`${sponsor.slice(0, 8)}...${sponsor.slice(
                                sponsor.length - 8,
                                sponsor.length
                            )}`}
                        </Typography>
                    )}

                    {error ? (
                        <Typography
                            variant='caption'
                            sx={{
                                backgroundColor: 'error.main',
                                color: 'white',
                                width: '100%',
                                textAlign: 'center',
                            }}
                        >
                            Sponsor not in game
                        </Typography>
                    ) : (
                        <></>
                    )}
                </Stack>
                <Stack>
                    <Stack
                        direction='row'
                        spacing={1}
                        justifyContent='center'
                        sx={{ opacity: '0.6' }}
                    >
                        <Typography
                            variant='caption'
                            sx={{ fontSize: '0.6em' }}
                        >
                            8% Matrix
                        </Typography>
                        <Divider
                            flexItem
                            orientation='vertical'
                            sx={{ borderColor: 'white' }}
                        />
                        <Typography
                            variant='caption'
                            sx={{ fontSize: '0.6em' }}
                        >
                            2% Referred
                        </Typography>
                    </Stack>
                    <Typography
                        sx={{
                            textAlign: 'center',
                            fontWeight: 800,
                        }}
                    >
                        BOTRIX LEVEL {lvl}
                    </Typography>

                    <Typography
                        sx={{
                            textAlign: 'center',
                        }}
                        variant='caption'
                    >
                        {price} USDT
                    </Typography>
                </Stack>

                <Box sx={{ p: 1 }}>
                    {state === 'buyed' ? (
                        <Box
                            sx={{
                                backgroundColor: 'success.main',
                                borderRadius: 16,
                                p: 1,
                            }}
                        >
                            <Typography textAlign='center'>On Game</Typography>
                        </Box>
                    ) : (
                        <LoadingButton
                            variant='contained'
                            fullWidth
                            disabled={state === 'blocked'}
                            onClick={handleBuy}
                            loading={loading}
                        >
                            Buy
                        </LoadingButton>
                    )}
                </Box>
            </Stack>
        </Paper>
    );
};
