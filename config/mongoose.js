const mongoose = require('mongoose');

const DB = 'mongodb+srv://revanthr227:gg44X8T8OomHfViI@placementcell.bqssyxh.mongodb.net/?retryWrites=true&w=majority';



mongoose.connect(DB, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = mongoose;
