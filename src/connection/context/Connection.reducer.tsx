import { Connection, emptyConnection } from '../models/connection';
import { Action, ActionType } from '../types/connection';

export const connectionReducer = (state: Connection, action: Action): Connection => {
    const { type, payload } = action;

    switch (type) {
        case ActionType.iniciarConexion:
        case ActionType.cambiarUsuario: {
            return { ...action.payload, isInstalled: true, isConnected: true };
        }
        case ActionType.cerrarConexion: {
            return { ...emptyConnection };
        }
        default:
            return {
                ...state,
            };
    }
};
