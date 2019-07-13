import { IStyle } from "fela";

type StyleDefinition<T> = (el: T) => IStyle | IStyle;

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
