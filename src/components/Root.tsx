import * as React from 'react';
import { IRenderer } from 'fela';
import { RendererProvider } from 'react-fela';
import ErrorBoundary from 'react-error-boundary';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { IApplicationRoute } from '../interfaces/common.interfaces';

declare namespace RootComponent {
    export interface IRootProps {
        fela: IRenderer;
        routes: IApplicationRoute[];
    }
}

export function Root(props: RootComponent.IRootProps) {
    const { fela, routes } = props;

    return (
        <ErrorBoundary>
            <RendererProvider renderer={fela}>
                <React.Suspense fallback={null}>
                    <Router>
                        <Switch>{routes.map(route => <Route {...route} />)}</Switch>
                    </Router>
                </React.Suspense>
            </RendererProvider>
        </ErrorBoundary>
    );
}
