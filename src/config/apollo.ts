import ApolloClient from "apollo-boost";

export const createApolloClient = (resolvers) => new ApolloClient({ 
    clientState: {
        resolvers,
        defaults: {
            beers: [],
        },
    }
 });
