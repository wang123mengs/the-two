(function (angular) {
    "use strict";

    // start your ride
    // go  home
 //创建主页模块
 angular.module("hello",[
  "ui.router",
  "Myjsonp-hello",
  "tab-hello",
  "movietype-hello"
  ])
 
 .config(["$stateProvider",function($stateProvider){
  $stateProvider
  //tab栏规则
  .state({
    name:'tab',
    url:'/tab',
    abstract:true,
    //地址
    templateUrl:'./tab/tab.html',
    controller:'tabController'
  })
  //首页规则
  .state({
    name:'tab.home',
    url:'/home',

    //地址
    templateUrl:'./home/home.html'
  })
  //热映列表
  .state({
    name:'tab.theaters',
    url:'/:theaters/:page?',
    //地址
    templateUrl:'./movietype/movietype.html',
    controller:'movietypeController'
  })
 }])
})(angular);

