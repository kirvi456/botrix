import { Avatar, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';

import LVL1 from '../../assets/LVL1.jpg';
import LVL2 from '../../assets/LVL2.jpg';
import LVL3 from '../../assets/LVL3.jpg';
import LVL4 from '../../assets/LVL4.jpg';
import LVL5 from '../../assets/LVL5.jpg';

import { countInformation } from './types';

type LevelInfoHeaderProps = {
    countInfo: countInformation;
    level: number;
};

export const LevelInfoHeader: React.FC<LevelInfoHeaderProps> = ({ countInfo, level }) => {
    const getIMG = () => {
        switch (level) {
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
                return LVL1;
        }
    };

    return (
        <Stack
            alignItems='center'
            spacing={2}
        >
            <Avatar
                src={getIMG()}
                sx={{
                    width: 180,
                    height: 180,
                    border: '6px solid',
                }}
            />
            <Stack alignItems='center'>
                <Typography variant='h6'>Token ID {countInfo.tokenId}</Typography>
                <Typography variant='caption'>{countInfo.currentAccount}</Typography>
            </Stack>
        </Stack>
    );
};
