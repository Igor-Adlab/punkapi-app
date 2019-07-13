import * as React from 'react';

import { Page } from '../components/Page';
import { BeerGridRedux } from '../containers/BeerGrid.redux';

declare namespace HomeReduxComponent {
    export interface IHomeProps {}
}

export function HomeRedux(props: HomeReduxComponent.IHomeProps) {
    return (
        <Page title="Favorite beer">
            <BeerGridRedux />
        </Page>
    );
}
