import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Root } from './components/Root';

import { reducers, rootEpic } from './redux';

import { renderer } from './config/fela';
import { routes } from './config/routes';

import { createApplicationStore } from './config/store';

const store = createApplicationStore(reducers, { beers: {  } }, rootEpic);

ReactDOM.render(
    <Root store={store} fela={renderer} routes={routes} />, 
    document.getElementById('root'),
);
