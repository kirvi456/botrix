export type countInformation = {
    currentAccount: string;
    tokenId: string;
    referralWithDraw: string;
    matrixWithDraw: string;
    withdrawed: string;
    sponsor: string;
    sponsorToken: string;
    referred: string[];
    matrixNodes: { tokenId: string; dir: string }[];
    connections: string;
};

export const emptyCountInfo: countInformation = {
    currentAccount: '',
    tokenId: '',
    referralWithDraw: '',
    matrixWithDraw: '',
    withdrawed: '',
    sponsor: '',
    sponsorToken: '',
    referred: [],
    matrixNodes: [],
    connections: '',
};
