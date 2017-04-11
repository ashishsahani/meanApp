angular.module('userControllers',['userServices'])

.controller('regCtrl',function($http,$location,$timeout,User){

	var app =this;

	this.regUser=function(regData){
		app.loading=true
		this.errorMsg=false
		User.create(app.regData).then(function(data){
			
			if (data.data.success) {
				app.successMsg =data.data.message + '....Redirecting';
				app.loading=false;
				$timeout(function() {
					$location.path('/');
				}, 2000);
				
			}else {
				app.loading=false;
				app.errorMsg=data.data.message;
			}
		})
	}
})