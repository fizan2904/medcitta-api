import {
	GraphQLInputObjectType,
	GraphQLString
} from 'graphql';

export default new GraphQLInputObjectType({
	name: 'NameInputType',
	fields: () => ({
		first: { type: GraphQLString },
		last: { type: GraphQLString }
	})
});