import { ajax } from 'rxjs/ajax';
import { switchMap, map } from 'rxjs/operators';

import { BEER_LOADING, BEER_APPLY_FILTERS, loadingBeers, applyBeerFilter, responseBeers } from "../actions";
import { combineEpics } from 'redux-observable';
import { BeerService } from '../../services/BeerService';
import { IBeer } from '../../interfaces/beer.interface';
import { AnyAction } from 'redux';

const loading = action$ =>
  action$
    .ofType(BEER_LOADING)
    .pipe(
        map((action: any) => 
                action.type === BEER_APPLY_FILTERS
                    ? loadingBeers(true)   
                    : loadingBeers(action.state)),
    );

const list = action$ =>
  action$.ofType(BEER_APPLY_FILTERS)
    .pipe(
        switchMap((action: any) => BeerService.fetch(action.filters, action.pagination)),
        map<IBeer[], AnyAction>((list) => responseBeers(list)),
    );

export const beers = combineEpics(loading, list);