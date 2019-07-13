import { scoped, ActionScope, APPY_FILTERS, SET_LOADING, RESPONSE_DATA, RESPONSE_ERROR } from "../constants";
import { BeerFilterPair, IPagination } from "../../interfaces/common.interfaces";

export const BEER_LOADING = scoped(ActionScope.Beer, SET_LOADING);
export const BEER_LIST_ERROR = scoped(ActionScope.Beer, RESPONSE_ERROR);
export const BEER_APPLY_FILTERS = scoped(ActionScope.Beer, APPY_FILTERS);
export const BEER_LIST_RESPONSE = scoped(ActionScope.Beer, RESPONSE_DATA);

export const loadingBeers = (state: boolean) => ({ type: BEER_LOADING, state });
export const responseBeers = (list: any[]) => ({ type: BEER_LIST_RESPONSE, list });
export const responseErrorBeers = (error: Error) => ({ type: BEER_LIST_ERROR, error });
export const applyBeerFilter = (filters: BeerFilterPair[], pagination: IPagination) => ({ type: BEER_APPLY_FILTERS, filters, pagination });
