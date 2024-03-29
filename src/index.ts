import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";

// server setup
const server = new ApolloServer({
    typeDefs, // definitions of the types of data that can be queried
    resolvers // functions that are called to fetch the data for the schema's field
})

const { url } = await startStandaloneServer(server, {
    listen: {
        port: 4000,
    }
})

console.log(`Server ready at ${url}`)