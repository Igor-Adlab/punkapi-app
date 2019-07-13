import * as React from 'react';

import { Home } from '../pages/Home.redux';
import { IApplicationRoute } from "../interfaces/common.interfaces";
import { NotFound } from '../pages/NotFound';

export const routes: IApplicationRoute[] = [
    { key: '1', path: '/', component: Home, exact: true },

    // Routes
    { key: '2', path: '/redux', component: Home, exact: true },

    // Fallback route | Page Not Found
    { key: '*', path: '*', component: NotFound },
];