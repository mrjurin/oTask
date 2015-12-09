var oTask = angular.module("oTask", []);

oTask.controller('ListCtrl',function($scope){
    
    $scope.dataCount=0;
    
    $scope.dataSource=[
        {id:1,task_item:"task one"},
        {id:2,task_item:"task two"},
        {id:3,task_item:"task three"},
        {id:1,task_item:"task four"},
        {id:1,task_item:"task five"}
    ];
    
    $scope.model={};
    
    
    $scope.fnAddTask=function(){
        
        $scope.dataSource.push({id:111,task_item:$scope.model.new_task});
    }
    
    $scope.fnDeleteTask=function(index){
        $scope.dataSource.splice(index,1);
    }
    
    
    
    
});



