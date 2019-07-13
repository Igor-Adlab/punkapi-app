import * as React from 'react';
import { IStyle } from 'fela';
import { useFela } from 'react-fela';

import { CuttedText } from './CuttedText';
import { IBeer } from '../interfaces/beer.interface';

declare namespace BeerComponent {
    export interface IBeerComponentProps {
        beer: IBeer;
    }
}

export function BeerInfo(props: BeerComponent.IBeerComponentProps) {
    const { beer } = props;
    const { css } = useFela(props);

    return (
        <div className={css(BeerInfo.styles.beer as IStyle)}>
            <div className={css(BeerInfo.styles.header.root)}>
                <div className={css(BeerInfo.styles.header.name)}>{beer.name}</div>
                <div className={css(BeerInfo.styles.header.tagline)}>{beer.tagline}</div>
            </div>
            <div className={css(BeerInfo.styles.description)}>
                <CuttedText type={CuttedText.word} count={20} text={beer.description} />
            </div>
        </div>
    );
}

BeerInfo.styles = {
    beer: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    header: {
        root: {
            marginBottom: '5px',
        },
        name: {
            fontSize: '28px',
            lineHeight: '1.2em',
        },
        tagline: {
            fontSize: '22px',
            lineHeight: '1.5em',
        },
    },
    description: {
        fontSize: '14px',
    },
};
