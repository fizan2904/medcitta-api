import { GraphQLObjectType } from 'graphql';

import UserMutation from './Mutations/User';

export default new GraphQLObjectType({
	name: 'RootMutations',
	fields: {
		'addUser': UserMutation.add
	}
});