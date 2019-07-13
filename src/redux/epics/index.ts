import { combineEpics } from 'redux-observable';

import { beers } from './beers.epic';

export const rootEpic = combineEpics(beers);
