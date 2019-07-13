import { IStyle } from "fela";

export type StyleDefinition<T> = (el: T) => IStyle | IStyle;

export type KeyValuePair<T, U> = {
    key: T;
    value: U;
};

export interface IPagination {
    page?: number;
    per_page?: number;
}

export type BeerFilterPair = KeyValuePair<EFilterKeys, string>;

export enum EFilterKeys {
    Ids = 'ids',

    Food = 'food',
    Malt = 'malt',
    Hops = 'hops',

    AbvGt = 'abv_gt',
    AbvLt = 'abv_lt',

    IbuGt = 'ibu_gt',
    IbuLt = 'ibu_lt',

    EbcGt = 'ebc_gt',
    EbcLt = 'ebc_lt',

    Yeast = 'yeast',
    Name = 'beer_name',

    BrewedAfter = 'brewed_after',
    BrewedBefore = 'brewed_before',
}

export interface IComponentStyles<T> {
    [propName: string]: StyleDefinition<T>;
}

export interface IApplicationRoute {
    key: string;
    path?: string;
    exact?: boolean;
    children?: IApplicationRoute[];
    component: any, // React component, string, etc
}
