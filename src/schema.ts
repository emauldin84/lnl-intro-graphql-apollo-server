// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
export const typeDefs = `#graphql
    type Film {
        id: ID!
        title: String!
        director: Director
        genre: String
        plot: String
        year: String
        posterUrl: String
    }

    type Director {
        id: ID!
        name: String!
        film: [Film!]!
    }

# The "Query" type is a special type: it is the root of all GraphQL queries. It defines the queries that users can execute to "jump into" the graph along with their return types.
    type Query {
        films: [Film]
        film(id: ID!): Film
        directors: [Director]
        director(id: ID, name: String): Director
    }
`