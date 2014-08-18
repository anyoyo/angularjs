//定义一个模块赋值给了umService,并且引入依赖的angulaer的模块
	
	var umService = angular.module( 'UserManage',['ngRoute']);
	
	function umRouteConfig ( $routeProvider ) {
		console.log($routeProvider)
		$routeProvider
		.when('/',{
			controller:ListController,
			templateUrl:'list.html'
		})
		.when('/update/addmo',{
			controller:adddemo,
			templateUrl:'add.html'
		})
		.when('/update/:id',{
			controller: UpdateController,
         	templateUrl: 'updemo.html'
		})
		.when('/delete',{
			
		})
		.otherwise({
			redirectTo:'/'
		});
	}
	
	umService.config( umRouteConfig );
 
 	/*function ListController ( $scope ) {
 		$scope.message = 'message';
 	}*/
 	
	function ListController( $scope,$http ){
		$http.get('server/user.json').success( function (data,status,headers,config) {
			console.log(data)
			$scope.users = data;
		})
	}
	
	function UpdateController($scope,$http,$routeParams){
		
		var id = $routeParams.id;
		
		$http.get('server/user.json').success( function (data,status,headers,config) {
			$scope.xiuUser=getObjBYID(id,data);
		})
		
		$scope.update = function (){

			console.log($scope.xiuUser)
			$http.get('server/user.json',{params:$scope.xiuUser})
		}
		
		$scope.fan = function (){
			window.location.href = 'tab.html';
		}
	}

	function getObjBYID(id,obj){
		var len = obj.length;
		for( var i=0;i<len;i++ ){
			if(id == obj[i].id){
				return obj[i];
			}
		}
		return null;
	}

	function adddemo($scope,$http,$routeParams){
		$scope.add = function () {
			$http.get( 'server/user.json', { params: $scope.xiuUser } );
		}
	}
	
	
	
	
	
	
	
	
	
