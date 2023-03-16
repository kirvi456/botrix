import Web3 from 'web3';

export type Connection = {
    currentAccount: string | undefined;
    isInstalled: boolean;
    isConnected: boolean;
    networkID: number | undefined;
    web3Connection: Web3 | undefined;
};

export const emptyConnection: Connection = {
    currentAccount: undefined,
    isInstalled: false,
    isConnected: false,
    networkID: undefined,
    web3Connection: undefined,
};
