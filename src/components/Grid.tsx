import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela'

declare namespace GridComponent {
    export interface IListItemProps {
        item: any;
    }

    export interface IGridConfig {
        columns: number; 
    }

    export interface IGridComponentProps {
        row?: any;
        list: any[];
        element?: any;
        config?: IGridConfig;
        children?: (item: any) => React.ReactElement | React.ReactElement[] | any | null;
    }
}

export function Grid(props: GridComponent.IGridComponentProps) {
    const { css } = useFela(props);
    const config = Object.assign(Grid.defaults, props.config);

    const rows = _.chunk(props.list, config.columns);

    const renderItems = (list) => list.map((item, itemKey) => 
        <React.Fragment key={itemKey}>
            {props.element 
                ? React.createElement<GridComponent.IListItemProps>(props.element, { item }, null)
                : props.children(item)}
        </React.Fragment>
    );

    return (
        <div className={css(Grid.styles.grid)}>
            {rows.map((items, rowKey) => (
                <React.Fragment key={rowKey}>
                    {props.row 
                        ? React.createElement(props.row, {}, renderItems(items)) 
                        : renderItems(items)}
                </React.Fragment>
            ))}
        </div>
    );
}

Grid.defaults = {
    columns: 3,
};

Grid.styles = {
    grid: {},
};
