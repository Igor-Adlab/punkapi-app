import { combineReducers } from 'redux';
import { createReducer } from 'redux-create-reducer';
import { BEER_LOADING, BEER_LIST_ERROR, BEER_APPLY_FILTERS, BEER_LIST_RESPONSE } from '../actions';

const loading = createReducer(false, {
    [BEER_LIST_ERROR]: () => true,
    [BEER_APPLY_FILTERS]: () => true,
    [BEER_LIST_RESPONSE]: () => false,
    [BEER_LOADING]: (state, action) => action.state,
});

const list = createReducer([], {
    [BEER_LIST_ERROR]: () => [],
    [BEER_LIST_RESPONSE]: (state, action) => action.list,
    // [BEER_LIST_RESPONSE]: (state, action) => action.list.length > 0 ? action.list : state,
});

const next = createReducer(false, {
    [BEER_LIST_ERROR]: () => false,
    [BEER_LIST_RESPONSE]: (state, action) => action.list.length > 0,
});

const filters = createReducer([], {
    [BEER_APPLY_FILTERS]: (state, action) => action.filters || [],
});

const pagination = createReducer({ page: 1, per_page: 5 }, {
    [BEER_APPLY_FILTERS]: (state, action) => action.pagination || state,
});

export const beers = combineReducers({
    loading, list, filters, pagination, next,
});
