import React, { useContext, useEffect, useReducer } from 'react';
import { Connection, emptyConnection } from '../models/connection';
import { Action, ActionType } from '../types/connection';
import { connectionReducer } from './Connection.reducer';
import Web3 from 'web3';
import { AuthContext } from './Connection.context';

const initialState: Connection = { ...emptyConnection };

type AuthProviderProps = {
    children: JSX.Element;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const checkInstalled = () => {
        return !window.ethereum ? true : false;
    };

    const getConnection = async (): Promise<Connection | undefined> => {
        const web3Instance = new Web3(window.ethereum! as any);
        return await web3Instance?.eth
            .requestAccounts()
            .then(async (accounts: string[]) => {
                console.log('Se conecto primera', accounts);
                if (accounts.length === 0) {
                    return undefined;
                }
                console.log('si indico cuenta');
                return {
                    currentAccount: accounts[0],
                    isConnected: true,
                    isInstalled: true,
                    networkID: await web3Instance.eth.getChainId(),
                    web3Connection: web3Instance,
                };
            })
            .catch(() => {
                console.log('no indico cuenta');
                return undefined;
            });
    };

    const initSesion = async (): Promise<Connection> => {
        try {
            if (checkInstalled()) return { ...emptyConnection };
            const connection = await getConnection();
            if (!connection) return { ...emptyConnection };
            return connection;
        } catch (error: any) {
            return { ...emptyConnection };
        }
    };

    const [connectionState, dispatch] = useReducer(connectionReducer, initialState);

    const logout = async () => {
        const web3Instance = new Web3(window.ethereum! as any);
        web3Instance.eth.getAccounts().then(async (result: string[]) => {
            if (result.length === 0) {
                console.log('desconectando');
                // Definir la accion
                const action: Action = {
                    type: ActionType.cerrarConexion,
                    payload: { ...emptyConnection },
                };

                // Disparar el cambio
                dispatch(action);
                window.ethereum.removeListener('accountsChanged', handleAccountChange);
                window.ethereum.removeListener('chainChanged', handleAccountChange);
                window.ethereum.removeListener('disconnect', logout);
            }
        });
    };

    const handleAccountChange = () => {
        const web3Instance = new Web3(window.ethereum! as any);
        web3Instance.eth.getAccounts().then(async (result: string[]) => {
            if (result.length === 0) {
                console.log('se va a desloguear', result);
                logout();
                return;
            }
            const currentAccount = result[0];
            const isConnected = result.length > 0;
            const web3Connection = new Web3(window.ethereum! as any);
            const networkID = (await web3Connection.eth.getChainId()) ?? 0;
            dispatch({
                type: ActionType.cambiarUsuario,
                payload: {
                    currentAccount,
                    isConnected,
                    networkID,
                    isInstalled: true,
                    web3Connection,
                },
            });
        });
    };

    const login = async () => {
        if (checkInstalled()) return console.log('No se tiene instalado MetaMask');
        const connection = await getConnection();
        if (!connection) return console.log('No se tiene un usuario conectado0');
        // Definir la accion
        const action: Action = {
            type: ActionType.iniciarConexion,
            payload: { ...connection },
        };

        // Disparar el cambio
        dispatch(action);

        window.ethereum.on('accountsChanged', handleAccountChange);
        window.ethereum.on('chainChanged', handleAccountChange);
        window.ethereum.on('disconnect', logout);

        console.log('se debio loggear', connection);
    };

    useEffect(() => {
        login();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                connectionState,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
