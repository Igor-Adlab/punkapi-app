import 'antd/dist/antd.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { renderer } from './config/fela';
import { routes } from './config/routes';

import { Root } from './components/Root';

ReactDOM.render(
    <Root fela={renderer} routes={routes} />, 
    document.getElementById('root'),
);
