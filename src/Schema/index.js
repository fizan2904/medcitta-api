import { GraphQLSchema } from 'graphql';

import RootQuery from './Query';
import RootMutation from './Mutation';

export default new GraphQLSchema({
	query: RootQuery,
	mutation: RootMutation
});