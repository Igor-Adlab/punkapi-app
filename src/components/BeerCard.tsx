import * as React from 'react';

import { Card } from './Card';
import { BeerInfo } from './BeerInfo';
import { IBeer } from '../interfaces/beer.interface';

declare namespace BeerCardComponent {
    export interface IBeerCardProps {
        beer: IBeer;
        size?: number;
    }
}

export function BeerCard(props: BeerCardComponent.IBeerCardProps) {
    const { beer, size = BeerCard.medium } = props;
    return (
        <Card height={size} image={beer.image_url}>
            <BeerInfo beer={beer} />
        </Card>
    );
}

BeerCard.small = 200;
BeerCard.large = 350;
BeerCard.medium = 250;
