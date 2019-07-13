import * as _ from 'lodash';

import { IBeer } from "../interfaces/beer.interface";
import { BeerFilterPair, IPagination } from "../interfaces/common.interfaces";

export interface IViewState { filters?: BeerFilterPair[], pagination?: IPagination }

export class BeerService {
    public static readonly Next = 1;
    public static readonly Back = -1;
    public static readonly Current = 0;

    public static readonly defaults = {};
    public static readonly ENDPOINT = `https://api.punkapi.com/v2/beers`;

    public static paginate(direction: number, state: IViewState = {}, updates: IViewState = {}): IViewState {
        let filters = state.filters || [];
        let pagination = Object.assign({ page: 1, per_page: 25 }, state.pagination, updates.pagination);

        const isFiltersUpdated = !_.isEmpty(updates.filters) && !_.isEqual(state.filters || [], updates.filters || []);
        const isPageSizeUpdated = !_.isEmpty(updates.pagination) && state.pagination.per_page !== updates.pagination.page;

        if (isFiltersUpdated) {
            filters = updates.filters;
        }

        if (isFiltersUpdated || isPageSizeUpdated) {
            pagination.page = 1;
        } else {
            if (pagination.page + direction > 0) {
                pagination.page += direction;
            } else {
                pagination.page = 1;
            }
        }

        return { filters, pagination };
    }

    public static serialize(filters: BeerFilterPair[], pagination: IPagination): URLSearchParams {
        const query = filters
            .reduce((search, pair) => { 
                search.append(pair.key, pair.value);
                return search;
             }, new URLSearchParams());

        if (pagination.page) {
            query.append('page', pagination.page.toString())
        }

        if (pagination.per_page) {
            query.append('per_page', pagination.per_page.toString())
        }

        return query;
    }

    public static async fetch(filters: BeerFilterPair[] = [], pagination: IPagination = { page: 1, per_page: 25 }): Promise<IBeer[] | Error> {
        const search = this.serialize(filters, pagination);

        const data = await fetch(this.ENDPOINT + `?${search}`)
            .then<IBeer[]>(response => response.json());

        return data;
    }
}