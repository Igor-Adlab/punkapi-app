import { logger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

export const createApplicationStore = (reducer, initialState, epics) => {
    const epicMiddleware = createEpicMiddleware();
    const store = createStore(reducer, initialState, applyMiddleware(logger, epicMiddleware));

    epicMiddleware.run(epics);

    return store;
};
