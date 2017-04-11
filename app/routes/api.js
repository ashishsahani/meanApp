var User = require ('../models/user')
module.exports=function(router){
	router.post('/users',function(req,res){
			var user = new User();
			console.log(req.body);
			user.username = req.body.username ;
			user.password = req.body.password ;
			user.email = req.body.email;
			if (user.username == null || user.username == '' || user.email == null || user.email == '' || user.password == null || user.password == '') {
				res.send('Ensure Username, password ,and email were provided');
			}else{
				user.save(function(err){
				if (err){
					console.log(err)
					res.send("Username or Email Already Exists !");
				}else
				{
					res.send('User is Created');
				}

			});
		};
	})

	return router;
}








