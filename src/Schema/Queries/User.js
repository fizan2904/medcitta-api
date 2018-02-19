import {
	GraphQLString,
	GraphQLInt
} from 'graphql';
import mongoose from 'mongoose';

import UserType from './../Types/User';

const UserModel = mongoose.model('user');

export default {
	type: UserType,
	args: {
		_id: { type: GraphQLString },
		username: { type: GraphQLString },
		email: { type: GraphQLString },
		phone: { type: GraphQLInt }
	},
	resolve: async (parentValues, args) => {
		try {
			let user;
			if(args._id)
				args._id = mongoose.mongo.ObjectId(args._id);
			user = await UserModel.findOne(args).exec();
			if(user !== null)
				user.password = '';
			return user;
		}catch(e) {
			console.log(e);
			throw new Error('Internal server Error');
		}
	}
}