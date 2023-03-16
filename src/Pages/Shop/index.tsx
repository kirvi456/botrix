import React, { useContext, useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Stack } from '@mui/material';
import { ShopCard } from './ShopCard';
import { ShopCardProps } from './types';
import { URLSContext } from '../../context/URLs.context';
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { AuthContext } from '../../connection/context/Connection.context';

export const ShopPage = () => {
    const { search } = useLocation();

    const getRef = (): { ref1: string; ref2: string; ref3: string; ref4: string; ref5: string } => {
        const creatorDir = import.meta.env.VITE_APP_CREATOR as string;

        let { ref1 = '', ref2 = '', ref3 = '', ref4 = '', ref5 = '' } = queryString.parse(search);

        if (ref1 === '' || Array.isArray(ref1) || ref1 === null) ref1 = creatorDir;
        if (ref2 === '' || Array.isArray(ref2) || ref2 === null) ref2 = creatorDir;
        if (ref3 === '' || Array.isArray(ref3) || ref3 === null) ref3 = creatorDir;
        if (ref4 === '' || Array.isArray(ref4) || ref4 === null) ref4 = creatorDir;
        if (ref5 === '' || Array.isArray(ref5) || ref5 === null) ref5 = creatorDir;

        return { ref1, ref2, ref3, ref4, ref5 };
    };

    const { ref1, ref2, ref3, ref4, ref5 } = getRef();

    const {
        LVL1Contract,
        LVL2Contract,
        LVL3Contract,
        LVL4Contract,
        LVL5Contract,

        LVL1Dir,
        LVL2Dir,
        LVL3Dir,
        LVL4Dir,
        LVL5Dir,
    } = useContext(URLSContext);

    const { connectionState } = useContext(AuthContext);

    const { currentAccount } = connectionState;

    const levl1Status = async () => {
        const getStatus = async (): Promise<'blocked' | 'buyed' | 'available'> => {
            try {
                const isOnGame = await LVL1Contract.methods.players(currentAccount).call();
                if (isOnGame > 0) return 'buyed';
                const isRefOnGame = await LVL1Contract.methods.players(ref1).call();
                if (isRefOnGame == 0) return 'blocked';
                return 'available';
            } catch (error) {
                return 'blocked';
            }
        };
        let status = await getStatus();

        setShopList((prev) => {
            prev[0].state = status;
            return [...prev];
        });
    };

    const levl2Status = async () => {
        const getStatus = async (): Promise<'blocked' | 'buyed' | 'available'> => {
            try {
                const isOnGamePreviousLVL = await LVL1Contract.methods
                    .players(currentAccount)
                    .call();
                if (isOnGamePreviousLVL == 0) return 'blocked';
                const isOnGame = await LVL2Contract.methods.players(currentAccount).call();
                if (isOnGame > 0) return 'buyed';
                const isRefOnGame = await LVL2Contract.methods.players(ref2).call();
                if (isRefOnGame == 0) return 'blocked';
                return 'available';
            } catch (error) {
                return 'blocked';
            }
        };
        let status = await getStatus();

        setShopList((prev) => {
            prev[1].state = status;
            return [...prev];
        });
    };

    const levl3Status = async () => {
        const getStatus = async (): Promise<'blocked' | 'buyed' | 'available'> => {
            try {
                const isOnGamePreviousLVL = await LVL2Contract.methods
                    .players(currentAccount)
                    .call();
                if (isOnGamePreviousLVL == 0) return 'blocked';
                const isOnGame = await LVL3Contract.methods.players(currentAccount).call();
                if (isOnGame > 0) return 'buyed';
                const isRefOnGame = await LVL3Contract.methods.players(ref3).call();
                if (isRefOnGame == 0) return 'blocked';
                return 'available';
            } catch (error) {
                return 'blocked';
            }
        };
        let status = await getStatus();

        setShopList((prev) => {
            prev[2].state = status;
            return [...prev];
        });
    };
    const levl4Status = async () => {
        const getStatus = async (): Promise<'blocked' | 'buyed' | 'available'> => {
            try {
                const isOnGamePreviousLVL = await LVL3Contract.methods
                    .players(currentAccount)
                    .call();
                if (isOnGamePreviousLVL == 0) return 'blocked';
                const isOnGame = await LVL4Contract.methods.players(currentAccount).call();
                if (isOnGame > 0) return 'buyed';
                const isRefOnGame = await LVL4Contract.methods.players(ref4).call();
                if (isRefOnGame == 0) return 'blocked';
                return 'available';
            } catch (error) {
                return 'blocked';
            }
        };
        let status = await getStatus();

        setShopList((prev) => {
            prev[3].state = status;
            return [...prev];
        });
    };

    const levl5Status = async () => {
        const getStatus = async (): Promise<'blocked' | 'buyed' | 'available'> => {
            try {
                const isOnGamePreviousLVL = await LVL4Contract.methods
                    .players(currentAccount)
                    .call();
                if (isOnGamePreviousLVL == 0) return 'blocked';
                const isOnGame = await LVL5Contract.methods.players(currentAccount).call();
                if (isOnGame > 0) return 'buyed';
                const isRefOnGame = await LVL5Contract.methods.players(ref5).call();
                if (isRefOnGame == 0) return 'blocked';
                return 'available';
            } catch (error) {
                return 'blocked';
            }
        };
        let status = await getStatus();

        setShopList((prev) => {
            prev[4].state = status;
            return [...prev];
        });
    };

    useEffect(() => {
        if (!LVL1Contract) return;
        levl1Status();
        shopsList[0].contract = LVL1Contract;
        setShopList([...shopsList]);
    }, [LVL1Contract]);

    useEffect(() => {
        if (!LVL2Contract) return;
        levl2Status();
        shopsList[1].contract = LVL2Contract;
        setShopList([...shopsList]);
    }, [LVL2Contract]);

    useEffect(() => {
        if (!LVL3Contract) return;
        levl3Status();
        shopsList[2].contract = LVL3Contract;
        setShopList([...shopsList]);
    }, [LVL3Contract]);

    useEffect(() => {
        if (!LVL4Contract) return;
        levl4Status();
        shopsList[3].contract = LVL4Contract;
        setShopList([...shopsList]);
    }, [LVL4Contract]);

    useEffect(() => {
        if (!LVL5Contract) return;
        levl5Status();
        shopsList[4].contract = LVL5Contract;
        setShopList([...shopsList]);
    }, [LVL5Contract]);

    const [shopsList, setShopList] = useState<ShopCardProps[]>([
        {
            state: 'blocked',
            lvl: 1,
            price: 30,
            contractDir: LVL1Dir,
            sponsor: ref1,
            contract: LVL1Contract,
        },
        {
            state: 'blocked',
            lvl: 2,
            price: 70,
            contractDir: LVL2Dir,
            sponsor: ref2,
            contract: LVL2Contract,
        },
        {
            state: 'blocked',
            lvl: 3,
            price: 150,
            contractDir: LVL3Dir,
            sponsor: ref3,
            contract: LVL3Contract,
        },
        {
            state: 'blocked',
            lvl: 4,
            price: 550,
            contractDir: LVL4Dir,
            sponsor: ref4,
            contract: LVL4Contract,
        },
        {
            state: 'blocked',
            lvl: 5,
            price: 1200,
            contractDir: LVL5Dir,
            sponsor: ref5,
            contract: LVL5Contract,
        },
    ]);

    return (
        <Container sx={{ mt: 6 }}>
            <Stack>
                <Grid
                    container
                    spacing={2}
                    justifyContent='center'
                >
                    {shopsList.map(
                        ({ lvl, price, state, contractDir, sponsor, contract }, index) => (
                            <Grid
                                item
                                key={index}
                            >
                                <ShopCard
                                    lvl={lvl}
                                    state={state}
                                    price={price}
                                    contractDir={contractDir}
                                    sponsor={sponsor}
                                    contract={contract}
                                />
                            </Grid>
                        )
                    )}
                </Grid>
            </Stack>
        </Container>
    );
};
