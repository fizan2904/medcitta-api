import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt
} from 'graphql';
import GraphQLDate from 'graphql-date';

import NameType from './Helpers/Name';

export default new GraphQLObjectType({
	name: 'UserType',
	fields: () => ({
		_id: { type: GraphQLString },
		name: { type: NameType },
		username: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLString },
		password: { type: GraphQLString },
		createdAt: { type: GraphQLDate },
		updatedAt: { type: GraphQLDate }
	})
});