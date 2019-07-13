
import { NotFound } from '../pages/NotFound';
import { HomeRedux } from '../pages/Home.redux';
import { HomeApollo } from '../pages/Home.apollo';
import { IApplicationRoute } from "../interfaces/common.interfaces";

export const routes: IApplicationRoute[] = [
    { key: '1', path: '/', component: HomeRedux, exact: true },

    // Routes
    { key: '2', path: '/redux', component: HomeRedux, exact: true },
    { key: '3', path: '/apollo', component: HomeApollo, exact: true },

    // Fallback route | Page Not Found
    { key: '*', path: '*', component: NotFound },
];