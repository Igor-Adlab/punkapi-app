export enum EUnit {
    Grams = 'grams',
    Litres = 'litres',
    Celsius = 'celsius',
    Kilograms = 'kilograms',
}

export enum EIngredientAttribute {
    bitter = 'bitter',
    flavour = 'flavour',
}

export interface IUnitValue<T, U extends EUnit> {
    unit: U;
    value: T;
}

export interface IIngredientRecord {
    add?: string;
    name: string;
    attribute?: string;
    amount: IUnitValue<number, EUnit.Kilograms | EUnit.Grams>
}

export interface IMethodStep {
    duration?: number;
    temp: IUnitValue<number, EUnit.Celsius>
}

export interface IBeer {
    id: number;
    ph: number;
    abv: number;
    ebc: number;
    srm: number;
    ibu: number;
    name: string;
    tagline: string;
    target_fg: number;
    target_og: number;
    image_url: string;
    description: string;
    first_brewed: string;
    attenuation_level: number;

    method: {
        twist?: IMethodStep;
        mash_temp: IMethodStep[];
        fermentation: IMethodStep;
    };

    ingredients: {
        yeast: string;
        malt: IIngredientRecord[];
        hops: IIngredientRecord[];
    };

    brewers_tips: string;
    contributed_by: string;
    food_pairing: string[];
    volume: IUnitValue<number, EUnit.Litres>;
    boil_volume: IUnitValue<number, EUnit.Litres>;
}
