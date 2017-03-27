angular.module("movietype-hello",["Myjsonp-hello"])
.controller('movietypeController',[
  '$scope',
  'Myjsonp',
  '$stateParams',
  function($scope,Myjsonp,$stateParams){

    console.log($stateParams);
    // 自己获取hash值，取出hash中的q参数
    console.log(location.hash)
    var tem = location.hash,
    arr = tem.split("?"),
    q = '';
    if(arr.length>1){
      q = arr[0].split('=')[1];
    }

    var url = 'https://api.douban.com//v2/movie/in_theaters';
    switch($stateParams.theaters){
      case  'theaters':
      url = 'http://api.douban.com/v2/movie/in_theaters';
      break;
      case 'comming':
      url = 'http://api.douban.com/v2/movie/coming_soon';
      break;
      case 'top':
      url = 'http://api.douban.com/v2/movie/top250';
      break;
      case 'search':
      url = 'http://api.douban.com/v2/movie/search';
      break;
    }
    var count = 10;//每页几条数据

    var page = $stateParams.page || 1;//第几页

    $scope.page = page;

    //数据从第几条开始
    var star = (page - 1)*count;


    Myjsonp.jsonp({
      url:url,
      data:{start: star, count: count,q:3},
      success:function(arg){
        console.log(arg);

        $scope.list = arg.subjects;

        //总数据
        $scope.total = arg.total;
        //总页数
        $scope.totalPage = Math.ceil(arg.total/count);

        $scope.$apply();
      }
    })
    //换页
    $scope.changePage = function(newPage){
      
      if(newPage > $scope.totalPage || newPage < 1){
        //console.log(newPage)
        return ;
      }
     
      location.hash = '#!/tab/in_theaters/'+newPage;
    }
}])