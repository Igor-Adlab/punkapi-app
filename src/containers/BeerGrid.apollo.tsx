import * as _ from 'lodash';
import { Empty } from 'antd';
import * as React from 'react';
import { Button, Icon } from 'antd';
import { useFela } from 'react-fela';
import { Query } from 'react-apollo';
import { useSelector, ReactReduxContext } from 'react-redux';

import { Toolbar } from '../components/Toolbar';
import { BeerCard } from '../components/BeerCard';
import { BeerGrid } from '../components/BeerGrid';
import { applyBeerFilter } from '../redux/actions';
import { BeerFilterPair, IPagination } from '../interfaces/common.interfaces';
import { BEERS_QUERY } from '../graphql/queries';

declare namespace BeerGridApolloComponent {
    export interface IBeerGridProps {
        paginate?: () => {};
        pagination?: IPagination;
        filters?: BeerFilterPair[];
    }
}

export function BeerGridApollo(props: BeerGridApolloComponent.IBeerGridProps) {
    const { css } = useFela(props);

    const [viewState, setViewState] = React.useState({ filters: [], pagination: {} });

    return (
        <div>
            <Query variables={viewState} query={BEERS_QUERY}>
                {({ data, loading }) => (
                    <React.Fragment>
                        <div className={css(BeerGridApollo.style.toolbar)}>
                            <Toolbar
                                loading={loading}
                                apply={setViewState as any}
                                filters={viewState.filters}
                                pagination={viewState.pagination}
                                next={data.beers && data.beers.length > 0}
                            />
                        </div>
                        {(_.isEmpty(data.beers) && !loading) ? <Empty /> : (
                            <BeerGrid
                                list={data.beers}
                                columns={2}
                                loading={loading}
                                size={BeerCard.large}
                                spacing={BeerGrid.spacing.medium}
                            />
                        )}
                    </React.Fragment>
                )}
            </Query>
        </div>
    );
}

{/* <div className={css(BeerGridRedux.style.toolbar)}>
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
)} */}

BeerGridApollo.style = {
    toolbar: { marginBottom: '15px' },
};
