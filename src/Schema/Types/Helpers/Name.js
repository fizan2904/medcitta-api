import {
	GraphQLObjectType,
	GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
	name: 'NameType',
	fields: () => ({
		first: { type: GraphQLString },
		last: { type: GraphQLString }
	})
});