export type ShopCardProps = {
    state: 'blocked' | 'buyed' | 'available';
    price: number;
    lvl: number;
    contractDir: string;
    sponsor: string;
    contract: any;
};
