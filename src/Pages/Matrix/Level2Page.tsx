import React, { useContext, useEffect, useState } from 'react';
import { Container } from '@mui/system';
import { LevelInfo } from './LevelInfo';
import { URLSContext } from '../../context/URLs.context';
import { AuthContext } from '../../connection/context/Connection.context';
import { countInformation, emptyCountInfo } from './types';
import { InfoEskeleton } from './InfoEskeleton';
import { NoOnGame } from './NoOnGame';
import { toBinary } from '../../helpers/convertions';

export const Level2Page = () => {
    const [countInfo, setCountInfo] = useState<countInformation>(emptyCountInfo);

    const { LVL2Contract } = useContext(URLSContext);

    const { connectionState } = useContext(AuthContext);

    const { currentAccount } = connectionState;

    const getInformation = async () => {
        try {
            setCountInfo((prev) => ({ ...prev, currentAccount: currentAccount || '' }));

            const tokenId = await LVL2Contract.methods.players(currentAccount).call();
            setCountInfo((prev) => ({ ...prev, tokenId }));

            if (tokenId == 0) return;

            const information = await LVL2Contract.methods.users(Number(tokenId) - 1).call();

            setCountInfo((prev) => ({
                ...prev,
                matrixWithDraw: toBinary(information.matrixWithdraw).toString(),
                referralWithDraw: toBinary(information.referralWithdraw).toString(),
                withdrawed: toBinary(information.withdrawed).toString(),
                sponsor: information.sponsor,
            }));

            const referred = await LVL2Contract.methods.getPlayerReferred(currentAccount).call();

            setCountInfo((prev) => ({
                ...prev,
                referred,
            }));

            const connections = await LVL2Contract.methods
                .printTreeConns(Number(tokenId) - 1)
                .call();

            setCountInfo((prev) => ({
                ...prev,
                connections,
            }));

            const matrixNodes: { tokenId: string; dir: string }[] = [];

            const treeSTR = (await LVL2Contract.methods
                .printTree(Number(tokenId) - 1)
                .call()) as string;

            treeSTR.split(';').forEach((el, index, array) => {
                if (index > 0 && index < array.length - 1) {
                    const splited = el.split('$');
                    matrixNodes.push({ tokenId: splited[1], dir: splited[0] });
                }
            });

            setCountInfo((prev) => ({
                ...prev,
                matrixNodes: [...matrixNodes],
            }));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (LVL2Contract) getInformation();
    }, [LVL2Contract]);

    if (countInfo.tokenId === '') {
        return <InfoEskeleton />;
    }

    if (countInfo.tokenId === '0') {
        return <NoOnGame />;
    }

    return (
        <Container sx={{ pb: 6, mt: 6 }}>
            <LevelInfo
                countInfo={countInfo}
                level={2}
                contract={LVL2Contract}
                getInformation={getInformation}
            />
        </Container>
    );
};
