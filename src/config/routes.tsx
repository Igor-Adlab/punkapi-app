import * as React from 'react';

import { Home } from '../pages/Home';
import { IApplicationRoute } from "../interfaces/common.interfaces";

export const routes: IApplicationRoute[] = [
    { key: '1', path: '/', component: Home, exact: true },

    // Fallback route | Page Not Found
    { key: '*', path: '*', component: () => <div>Not Found :(</div> },
];