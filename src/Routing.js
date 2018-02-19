import app from './app';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import Schema from './Schema';

app.all("/graph", graphqlExpress(req => ({
  schema: Schema,
  context: req.state
})));

app.all("/graphiql", graphiqlExpress({
  endpointURL: "/graph",
}));

export default app;