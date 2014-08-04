//定义一个模块赋值给了umService,并且引入依赖的angulaer的模块
	
	var umService = angular.module( 'UserManage',['ngRoute']);
	
	function umRouteConfig ( $routeProvider ) {
		console.log($routeProvider)
		$routeProvider
		.when('/',{
			controller:ListController,
			templateUrl:'list.html'
		})
		.otherwise({
			redirectTo:'/'
		});
	}
	
	umService.config( umRouteConfig );

	function ListController( $scope,$http ){
		$http.get('server/user.json').success( function (data,status,headers,config) {
			console.log(data)
			$scope.users = data;
		})
		
	}
