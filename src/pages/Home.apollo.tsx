import * as React from 'react';

import { Page } from '../components/Page';
import { BeerGridApollo } from '../containers/BeerGrid.apollo';

declare namespace HomeApolloComponent {
    export interface IHomeProps {}
}

export function HomeApollo(props: HomeApolloComponent.IHomeProps) {
    return (
        <Page title="Favorite beer">
            <BeerGridApollo />
        </Page>
    );
}
