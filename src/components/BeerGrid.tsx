import * as React from 'react';
import { Row, Col } from 'antd';

import { Grid } from './Grid';
import { IBeer } from '../interfaces/beer.interface';
import { BeerCard } from './BeerCard';
import { useFela } from 'react-fela';
import { IStyle } from 'fela';

declare namespace BeerGridComponent {
    export interface IBeerGridProps {
        size: number;
        list: IBeer[];
        columns?: number;
        spacing?: number;
    }
}

export function BeerGrid(props: BeerGridComponent.IBeerGridProps) {
    const { css } = useFela(props);
    const { list, columns = 2, size, spacing = BeerGrid.spacing.medium } = props;
    return (
        <div className={css(BeerGrid.styles.grid as IStyle)}>
            <Grid 
                list={list}
                config={{ columns }}
                row={BeerGrid.Row({ spacing })}
                element={BeerGrid.Column({ columns, size })}
            />
        </div>
    );
}

BeerGrid.Row = ({ spacing }) => ({ children, ...props }) => {
    const { css } = useFela({ spacing });

    return (
        <Row className={css(BeerGrid.styles.row as IStyle)} gutter={spacing}>{children}</Row>
    );
};

BeerGrid.Column = ({ columns, size }) => ({ item }) => (
    <Col md={24 / columns}>
        <BeerCard size={size} beer={item} />
    </Col>
);

BeerGrid.spacing = {
    small: 8,
    large: 32,
    xsmall: 8,
    medium: 16,
};

BeerGrid.styles = {
    row: ({ spacing }): IStyle => ({
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: `${spacing}px`,
    }),
    grid: ({ spacing }): IStyle => ({
        padding: `0 ${spacing}px`,
    }),
    column: {},
}
