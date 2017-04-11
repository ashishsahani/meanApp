var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var bcrypt = require('bcrypt');

var saltsRounds = 10;
var userSchema = new Schema({
	username: { type : String , lowercase : true , required: true , unique : true},
	password: {type : String , required: true },
	email : {type : String , required: true, lowercase: true, unique: true }
});

userSchema.pre('save',function(next){
	var user= this ;
	bcrypt.hash(user.password,saltsRounds,function(err,hash){
		if (err) return next(err);
		user.password= hash ;
		next();
	})
})

module.exports = mongoose.model('User',userSchema)