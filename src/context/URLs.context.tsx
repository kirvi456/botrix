import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../connection/context/Connection.context';
import { usdtABI } from './ABIS/Usdt';
import { LVL1ABI } from './ABIS/LVL1';

type URLSList = {
    USDTDir: string;
    LVL1Dir: string;
    LVL2Dir: string;
    LVL3Dir: string;
    LVL4Dir: string;
    LVL5Dir: string;
    USDTContract: any;
    LVL1Contract: any;
    LVL2Contract: any;
    LVL3Contract: any;
    LVL4Contract: any;
    LVL5Contract: any;
};

const myURLSEmpty: URLSList = {
    USDTDir: `${import.meta.env.VITE_APP_USDT}`,
    LVL1Dir: `${import.meta.env.VITE_APP_LVL1}`,
    LVL2Dir: `${import.meta.env.VITE_APP_LVL2}`,
    LVL3Dir: `${import.meta.env.VITE_APP_LVL3}`,
    LVL4Dir: `${import.meta.env.VITE_APP_LVL4}`,
    LVL5Dir: `${import.meta.env.VITE_APP_LVL5}`,
    USDTContract: undefined,
    LVL1Contract: undefined,
    LVL2Contract: undefined,
    LVL3Contract: undefined,
    LVL4Contract: undefined,
    LVL5Contract: undefined,
};

export const URLSContext = React.createContext<URLSList>(myURLSEmpty);

export const URLSProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
    const [value, setValue] = useState<URLSList>(myURLSEmpty);
    const { connectionState } = useContext(AuthContext);

    useEffect(() => {
        if (connectionState.web3Connection) {
            setValue({
                USDTDir: `${import.meta.env.VITE_APP_USDT}`,
                LVL1Dir: `${import.meta.env.VITE_APP_LVL1}`,
                LVL2Dir: `${import.meta.env.VITE_APP_LVL2}`,
                LVL3Dir: `${import.meta.env.VITE_APP_LVL3}`,
                LVL4Dir: `${import.meta.env.VITE_APP_LVL4}`,
                LVL5Dir: `${import.meta.env.VITE_APP_LVL5}`,
                USDTContract: new connectionState!.web3Connection!.eth.Contract(
                    usdtABI as any,
                    `${import.meta.env.VITE_APP_USDT}`
                ),
                LVL1Contract: new connectionState!.web3Connection!.eth.Contract(
                    LVL1ABI as any,
                    `${import.meta.env.VITE_APP_LVL1}`
                ),
                LVL2Contract: new connectionState!.web3Connection!.eth.Contract(
                    LVL1ABI as any,
                    `${import.meta.env.VITE_APP_LVL2}`
                ),
                LVL3Contract: new connectionState!.web3Connection!.eth.Contract(
                    LVL1ABI as any,
                    `${import.meta.env.VITE_APP_LVL3}`
                ),
                LVL4Contract: new connectionState!.web3Connection!.eth.Contract(
                    LVL1ABI as any,
                    `${import.meta.env.VITE_APP_LVL4}`
                ),
                LVL5Contract: new connectionState!.web3Connection!.eth.Contract(
                    LVL1ABI as any,
                    `${import.meta.env.VITE_APP_LVL5}`
                ),
            });
        }
    }, [connectionState.web3Connection]);

    return <URLSContext.Provider value={value}>{children}</URLSContext.Provider>;
};
