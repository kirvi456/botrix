import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthLayout } from './common/Layouts/AuthLayout';
import { NoAuthLayout } from './common/Layouts/NoAuthLayout';
import { HomePage } from './Pages/Home';
import { Level1Page } from './Pages/Matrix/Level1Page';
import { Level2Page } from './Pages/Matrix/Level2Page';
import { Level3Page } from './Pages/Matrix/Level3Page';
import { Level4Page } from './Pages/Matrix/Level4Page';
import { Level5Page } from './Pages/Matrix/Level5Page';
import { ShopPage } from './Pages/Shop';
import { DateCountDown } from './Pages/Timer';

export const AppRouter: React.FC<{}> = () => {
    return (
        <Routes>
            <Route
                path='/'
                element={<NoAuthLayout />}
            >
                <Route
                    path='/'
                    element={<HomePage />}
                />
                <Route
                    path='/home'
                    element={<HomePage />}
                />
            </Route>
            <Route
                path='/'
                element={<AuthLayout />}
            >
                <Route
                    path='/shop'
                    element={<ShopPage />}
                />
                <Route
                    path='/matrix1'
                    element={<Level1Page />}
                />
                <Route
                    path='/matrix2'
                    element={<Level2Page />}
                />
                <Route
                    path='/matrix3'
                    element={<Level3Page />}
                />
                <Route
                    path='/matrix4'
                    element={<Level4Page />}
                />
                <Route
                    path='/matrix5'
                    element={<Level5Page />}
                />
            </Route>

            <Route
                path='*'
                element={<div>404</div>}
            />
        </Routes>
    );
};
