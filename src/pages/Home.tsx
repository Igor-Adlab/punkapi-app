import * as React from 'react';
import { Page } from '../components/Page';
import { BeerGrid } from '../components/BeerGrid';
import { beers } from '../mock';
import { BeerCard } from '../components/BeerCard';

declare namespace HomeComponent {
    export interface IHomeProps {}
}

export function Home(props: HomeComponent.IHomeProps) {
    return (
        <Page title="Favorite beer">
            <BeerGrid 
                columns={2}
                list={beers} 
                size={BeerCard.large} 
                spacing={BeerGrid.spacing.medium} 
            />
        </Page>
    );
}
