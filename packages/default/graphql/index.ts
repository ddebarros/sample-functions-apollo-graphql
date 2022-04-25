import { ApolloServer } from './ApolloServer';
import { ApolloServerPluginLandingPageGraphQLPlayground, gql } from 'apollo-server-core'

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type User {
    first_name: String!
    last_name: String!
    emails: String
  }
  type Query {
    GetUser: User  
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    GetUser: (args1: any, args2: any, args3: any) => {
      console.log(args1, args2, args3)
      return {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@mail.com'
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  // By default, the GraphQL Playground interface and GraphQL introspection
  // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
  //
  // If you'd like to have GraphQL Playground and introspection enabled in production,
  // install the Playground plugin and set the `introspection` option explicitly to `true`.
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const handler = server.createHandler();

export const main = handler;
