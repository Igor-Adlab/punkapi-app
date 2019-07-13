import { gql } from 'apollo-boost';

export const BEERS_QUERY = gql`
    query beers($filters: [IFilterPair], $pagination: IPagination) {
        beers(filters: $filters, pagination: $pagination) @client {
            id
            ph
            abv
            ebc
            srm
            ibu
            name
            tagline
            target_fg
            target_og
            image_url
            description
            first_brewed
            attenuation_level

            brewers_tips
            food_pairing
            contributed_by
        }
    }
`;
