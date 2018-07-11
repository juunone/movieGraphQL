import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphQL/resolvers";

const server = new GraphQLServer({
    typeDefs: "graphQL/schema.graphql",
    resolvers
})

server.start(() => {
    console.log('GraphQl server running!')
})