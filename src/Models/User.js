import mongoose from 'mongoose';
import shajs from 'sha.js';

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		first: {
			type: String,
			requierd: true
		},
		last: { type: String }
	},
	email: {
		type: String,
		lowercase: true,
		unique: true
	},
	phone: {
		type: Number,
		required: true,
		unique: true
	},
	password: {
		type: String
	}
}, {
	timestamps: true
});

mongoose.model('user', UserSchema);

UserSchema.pre('save', function(next) {
	console.log(this.password);
	this.password = new shajs.sha256().update(this.password).digest('hex');
	console.log(this.password);
	return next();
});