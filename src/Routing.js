import app from './app';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import Schema from './Schema';

app.all('/graph', graphqlExpress(req => ({
	Schema
})));

app.all('/graphiql', graphiqlExpress(req => ({
	endpointUrl: '/graph'
})))

export default app;