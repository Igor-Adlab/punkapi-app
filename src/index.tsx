import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Root } from './components/Root';

import { renderer } from './config/fela';
import { routes } from './config/routes';

import { resolvers } from './graphql/resolvers';
import { createApolloClient } from './config/apollo';

import { reducers, rootEpic } from './redux';
import { createApplicationStore } from './config/store';

const apollo = createApolloClient(resolvers);
const store = createApplicationStore(reducers, { beers: {  } }, rootEpic);

ReactDOM.render(
    <Root apollo={apollo} store={store} fela={renderer} routes={routes} />, 
    document.getElementById('root'),
);
