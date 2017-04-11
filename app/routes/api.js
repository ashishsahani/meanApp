var User = require ('../models/user')
module.exports=function(router){
	router.post('/users',function(req,res){
			var user = new User();
			console.log(req.body);
			user.username = req.body.username ;
			user.password = req.body.password ;
			user.email = req.body.email;
			if (user.username == null || user.username == '' || user.email == null || user.email == '' || user.password == null || user.password == '') {
				res.json({
					message:'Ensure Username, password ,and email were provided',
					success:false
				});
			}else{
				user.save(function(err){
				if (err){
					console.log(err)
					res.json({
						message:"Username or Email Already Exists !",
						success:false
				});
				}else
				{
					res.json({message:'User is created',
							success:true
							});
				}

			});
		};
	})

	return router;
}








