import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../connection/context/Connection.context';
import { NoConnected } from '../Errors/NoConnected';
import { NoCorrectNetwork } from '../Errors/NoCorrectNetwork';
import { NavBar } from '../NavBar/NavBar';

export const AuthLayout: React.FC<{}> = () => {
    const { connectionState } = useContext(AuthContext);

    const { currentAccount, isConnected, isInstalled, networkID } = connectionState;

    if (!isInstalled || !isConnected)
        return (
            <>
                <NavBar />
                <NoConnected />
            </>
        );
    if (networkID !== 56) return <NoCorrectNetwork />;

    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};
