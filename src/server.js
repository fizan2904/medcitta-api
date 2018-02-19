import app from './app';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/medicitta').then(
	function success(){
		app.listen(process.env.PORT || 3000, () => {
			console.log('Server started');
		})
	},
	function error(error) {
		console.log(`Error: ${error}`);
	}
);

import Models from './Models';
import Routings from './Routing';