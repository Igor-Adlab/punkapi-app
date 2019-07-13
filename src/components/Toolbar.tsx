import * as _ from 'lodash';
import { IStyle } from 'fela';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Button, Select, Divider } from 'antd';

import { Filters } from './Filters';
import { BeerService, IViewState } from '../services/BeerService';
import { IPagination, BeerFilterPair, EFilterKeys } from '../interfaces/common.interfaces';

const { Option } = Select;

declare namespace ToolbarComponent {
    export interface IToolbarProps {
        next?: boolean;
        loading?: boolean;
        pagination?: IPagination;
        filters?: BeerFilterPair[];
        apply: (state: IViewState) => void;
    }
}

export function Toolbar(props: ToolbarComponent.IToolbarProps) {
    const { css } = useFela(props);
    const paginate = direction => BeerService.paginate(direction, props, {});

    const back = () => props.apply(paginate(BeerService.Back));
    const next = () => props.apply(paginate(BeerService.Next));
    const filter = (filters) => props.apply(BeerService.paginate(BeerService.Current, props, { filters }));
    const size = (value) => props.apply(BeerService.paginate(BeerService.Current, props, { pagination: { per_page: value } }));

    return (
        <div className={css(Toolbar.styles.toolbar as IStyle)}>
            <div className={css(Toolbar.styles.filters as IStyle)}>
                <Filters apply={filter} />
            </div>
            <div className={css(Toolbar.styles.pagination as IStyle)}>
                <Select defaultValue={_.get(props.pagination, 'per_page', 25)} onSelect={size}>
                    <Option value={5}>5</Option>
                    <Option value={15}>15</Option>
                    <Option value={25}>25</Option>
                </Select>
                <Divider type="vertical" />
                <Button disabled={props.loading || (!props.pagination || props.pagination.page <= 1)} onClick={back}>Back</Button>
                {' '}
                <Button type="primary" disabled={props.loading || !props.next} onClick={next}>Next</Button>
            </div>
        </div>
    )
}

Toolbar.styles = {
    toolbar: {
        display: 'flex',
        padding: '0 16px',
        flexDirection: 'row',
    },
    filters: {
        flexGrow: 1,
    },
    pagination: {
        flexGrow: 0,
    },
};
