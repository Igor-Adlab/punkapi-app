import { combineReducers } from 'redux';

import { beers } from './reducers/beers';

export * from './epics';
export const reducers = combineReducers({
    beers,
});
