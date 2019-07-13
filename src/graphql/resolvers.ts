import { BeerService } from "../services/BeerService";
import { IBeer } from "../interfaces/beer.interface";

export enum ClientTypenames {
    Beer = 'Beer',
}

export const resolvers = {
    Query: {
        async beers(root, { filters, pagination }, context) {
            const list: IBeer[] | Error = await BeerService.fetch(filters, pagination);
            return list.map(beer => Object.assign(beer, { __typename: ClientTypenames.Beer }));
        }
    },
};
