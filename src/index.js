import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './schema';
import resolvers from './resolvers';
import models from './database/models';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
const { PORT } = process.env;

const app = express();

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    models,
  },
}));

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
