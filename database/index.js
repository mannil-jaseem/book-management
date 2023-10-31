const mongoose = require('mongoose');

let  DBURI = process.env.DBURI

// Create the database connection
let db = mongoose.connect(DBURI)
// mongoose.connect(DBURI, function(error) {
// 	if (error) {
// 		console.log(error);
// 	}
// });

// successfull connection
mongoose.connection.on('connected', function() {
	console.log('Mongoose default connection open to ' + DBURI);

});

// error
mongoose.connection.on('error', function(err) {
	console.log('Mongoose default connection error: ' + err);
});

// on disconnection
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose default connection disconnected');
});