import * as React from 'react';
import { IRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import ErrorBoundary from 'react-error-boundary';
import { Provider as StoreProvider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { IApplicationRoute } from '../interfaces/common.interfaces';
import { Store } from 'redux';

declare namespace RootComponent {
    export interface IRootProps {
        fela: IRenderer;
        store: Store<any>;
        routes: IApplicationRoute[];
    }
}

export function Root(props: RootComponent.IRootProps) {
    const { fela, routes, store } = props;

    return (
        <StoreProvider store={store}>
            <ErrorBoundary>
                <RendererProvider renderer={fela}>
                    <Router>
                        <Switch>{routes.map(route => <Route {...route} />)}</Switch>
                    </Router>
                </RendererProvider>
            </ErrorBoundary>
        </StoreProvider>
        
    );
}
