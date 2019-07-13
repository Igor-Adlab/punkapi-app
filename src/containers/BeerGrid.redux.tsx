import * as _ from 'lodash';
import { Button, Icon } from 'antd';
import * as React from 'react';
import { useSelector, ReactReduxContext } from 'react-redux';

import { BeerCard } from '../components/BeerCard';
import { BeerGrid } from '../components/BeerGrid';
import { BeerFilterPair, IPagination } from '../interfaces/common.interfaces';
import { applyBeerFilter } from '../redux/actions';
import { Empty } from 'antd';
import { Toolbar } from '../components/Toolbar';
import { useFela } from 'react-fela';

declare namespace BeerGridReduxComponent {
    export interface IBeerGridProps {
        paginate?: () => {};
        pagination?: IPagination;
        filters?: BeerFilterPair[];
    }
}

export function BeerGridRedux(props: BeerGridReduxComponent.IBeerGridProps) {
    const { css } = useFela(props);
    const { store } = React.useContext(ReactReduxContext);
    const { list, loading, pagination, filters, next } = useSelector(state => state.beers);

    React.useEffect(() => {
        store.dispatch(applyBeerFilter(filters, pagination));
    }, [filters, pagination])

    const apply = view => 
        store.dispatch(applyBeerFilter(view.filters, view.pagination));

    return (
        <div>
            <div className={css(BeerGridRedux.style.toolbar)}>
                <Toolbar
                    next={next} 
                    apply={apply}
                    loading={loading} 
                    filters={filters} 
                    pagination={pagination} 
                />
            </div>
            {(_.isEmpty(list) && !loading) ? <Empty /> : (
                <BeerGrid
                    list={list}
                    columns={2}
                    loading={loading}
                    size={BeerCard.large}
                    spacing={BeerGrid.spacing.medium}
                />
            )}
        </div>
    );
}

BeerGridRedux.style = {
    toolbar: { marginBottom: '15px' },
};
