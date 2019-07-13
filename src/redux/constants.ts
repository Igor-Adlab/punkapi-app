export const scoped = (scope: ActionScope, action) => `${scope}.${action}`;

export enum ActionScope {
    Beer = 'beer',
};

export const PAGINATE = 'PAGINATE';
export const SET_LOADING = 'SET_LOADING';
export const APPY_FILTERS = 'APPLY_FILTERS';
export const RESPONSE_DATA = 'RESPONSE_DATA';
export const RESPONSE_ERROR = 'RESPONSE_ERROR';