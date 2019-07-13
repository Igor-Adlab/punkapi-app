import * as React from 'react';

import { Page } from '../components/Page';
import { BeerGridRedux } from '../containers/BeerGrid.redux';

declare namespace HomeComponent {
    export interface IHomeProps {}
}

export function Home(props: HomeComponent.IHomeProps) {
    return (
        <Page title="Favorite beer">
            <BeerGridRedux />
        </Page>
    );
}
