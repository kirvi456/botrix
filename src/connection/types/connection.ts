import { Connection } from '../models/connection';

export enum ActionType {
    iniciarConexion,
    cambiarUsuario,
    cerrarConexion,
}

export type Action = {
    type: ActionType;
    payload: Connection;
};

export type ProviderOutput = {
    connectionState: Connection;
    login: () => Promise<void>;
    logout: () => void;
};
