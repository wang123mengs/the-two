//跨域请求Myjsonp模块
angular.module("Myjsonp-hello",[])
.service("Myjsonp",["$window",function($window){
  this.jsonp=function(obj){
    //拼接参数
    obj.data = obj.data || {};
    obj.url +=  '?';
    //把参数拼接到地址后面
    for(var key in obj.data){
      obj.url += key +"="+obj.data[key]+'&';
    }

    //创建一个随机的方法名
    var fn = 'MyJsonp_'+$window.Math.random().toString().substr(2);

    $window[fn] = obj.success;

    //动态创建一个script标签，利用src属性进行跨域请求
    var script = $window.document.createElement("script");
    script.src = obj.url + "callback="+fn;
    $window.document.body.appendChild(script);
  }
}])