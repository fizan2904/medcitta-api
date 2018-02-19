import { GraphQLObjectType } from 'graphql';

import UserQuery from './Queries/User';

export default new GraphQLObjectType({
	name: 'RootQuery',
	fields: {
		UserQuery
	}
});