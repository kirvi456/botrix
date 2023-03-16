import { ToggleButton, ToggleButtonGroup, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React, { useState } from 'react';
import { GeneralInfo } from './GeneralInfo';
import { LevelInfoHeader } from './LevelInfoHeader';
import { Tree } from './Tree';
import { countInformation } from './types';

type LevelInfoProps = {
    countInfo: countInformation;
    level: number;
    contract: any;
    getInformation: () => Promise<void>;
};

export const LevelInfo: React.FC<LevelInfoProps> = ({
    countInfo,
    level,
    contract,
    getInformation,
}) => {
    const [infoShow, setInfoShow] = useState<'general' | 'tree'>('general');

    const handleInfoShowChange = (
        event: React.MouseEvent<HTMLElement>,
        newShowOption: 'general' | 'tree'
    ) => {
        setInfoShow(newShowOption);
    };

    return (
        <Stack
            alignItems='center'
            spacing={2}
        >
            <LevelInfoHeader
                countInfo={countInfo}
                level={level}
            />
            <ToggleButtonGroup
                value={infoShow}
                exclusive
                onChange={handleInfoShowChange}
                aria-label='text alignment'
                fullWidth
                sx={{ width: 700, maxWidth: '90%' }}
                size='small'
            >
                <ToggleButton
                    value='general'
                    aria-label='left aligned'
                >
                    <Typography>General Information</Typography>
                </ToggleButton>

                <ToggleButton
                    value='tree'
                    aria-label='justified'
                >
                    <Typography>Matrix</Typography>
                </ToggleButton>
            </ToggleButtonGroup>

            {infoShow === 'general' ? (
                <GeneralInfo
                    countInfo={countInfo}
                    level={level}
                    contract={contract}
                    getInformation={getInformation}
                />
            ) : (
                <Tree countInfo={countInfo} />
            )}
        </Stack>
    );
};
