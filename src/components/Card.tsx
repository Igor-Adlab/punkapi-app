import { IStyle } from 'fela';
import * as React from 'react';
import { useFela } from 'react-fela'

import { Preview } from './Preview';

declare namespace CardComponent {
    export interface ICardProps {
        image: string;
        width?: number | string;
        height?: number | string;
        children: React.ReactElement | React.ReactElement[] | null;
    }
}

export function Card(props: CardComponent.ICardProps) {
    const { css } = useFela(props);
    const { children, image, height, width } = props;

    return (
        <Preview height={height} width={width} className={css(Card.styles.card)} image={image}>
            <div className={css(Card.styles.backdrop)}>
                {children}
            </div>
        </Preview>
    );
}

Card.styles = {
    card: ({ height, width }: any): IStyle => ({
        height, width,
        cursor: 'pointer',
        position: 'relative',
    }),
    backdrop: (): IStyle => ({
        top: 0,
        color: '#fff',
        width: '100%',
        height: '100%',
        padding: '16px',
        position: 'absolute',
        background: 'rgba(0, 0, 0, .5)',
    }),
}
