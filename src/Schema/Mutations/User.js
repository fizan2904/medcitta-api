import {
	GraphQLString,
	GraphQLInt,
	GraphQLNonNull
} from 'graphql';
import mongoose from 'mongoose';

import UserType from './../Types/User';
import NameInputType from './../Types/InputHelpers/Name';

const UserModel = mongoose.model('user');

export default {
	'add': {
		type: UserType,
		args: {
			name: { type: NameInputType },
			username: { type: new GraphQLNonNull(GraphQLString) },
			email: { type: GraphQLString },
			phone: { type: new GraphQLNonNull(GraphQLInt) },
			password: { type: new GraphQLNonNull(GraphQLString) }
		},
		resolve: async (parentValues, args) => {
			try {
				return await new UserModel(args).save();
			}catch(e) {
				if(e.code === 11000)
					throw new Error('User already exists');
				throw new Error('Internal server error');
			}
		}
	}
};