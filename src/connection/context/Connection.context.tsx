import { createContext } from 'react';
import { ProviderOutput } from '../types/connection';

export const AuthContext = createContext<ProviderOutput>({} as any);
