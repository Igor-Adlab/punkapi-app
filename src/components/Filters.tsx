import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { Form, DatePicker } from 'antd';
import { FormProps } from 'antd/lib/form';

import { IViewState } from '../services/BeerService';
import { BeerFilterPair, EFilterKeys } from '../interfaces/common.interfaces';

const { MonthPicker } = DatePicker;

declare namespace FiltersComponent {
    export interface IFilterProps extends FormProps {
        loading?: boolean;
        filters?: BeerFilterPair[];
        apply: (state: IViewState) => void;
    }
}

export function FiltersView(props: FiltersComponent.IFilterProps) {
    const { form } = props;
    return (
        <Form>
            {form.getFieldDecorator(EFilterKeys.BrewedAfter as string, {})(
                <MonthPicker allowClear={false} />
            )}
            {' - '}
            {form.getFieldDecorator(EFilterKeys.BrewedBefore as string, {})(
                <MonthPicker allowClear={false} />
            )}
        </Form>
    )
}

export const Filters = compose(
    Form.create({
        onValuesChange(props: any, changed, values) {
            const filters = Object
                .keys(values)
                .filter(key => values[key])
                .map(key => ({ key, value: values[key]._isAMomentObject ? values[key].format('MM-YYYY') : values[key] }));

            props.apply(filters);
        }
    }),
)(FiltersView);
