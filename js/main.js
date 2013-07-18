function FormController($scope){

	//If nothing in local storage, initialize empty array
	$scope.MFData = JSON.parse( localStorage["MFData"]  || '{"workList": []}' );


	$scope.saveStateToLocal = function(){ localStorage["MFData"] = JSON.stringify($scope.MFData);};

	$scope.$on('AddNewWorkOrder', function(e, wo){
		console.log("Received save signal");
		$scope.MFData.workList.push(wo);
	});

};


function InputController($scope){
	$scope.submission = {}

	$scope.saveWorkOrder = function(){
		console.log("Emitting save signal");
		$scope.$emit('AddNewWorkOrder', $scope.submission);
		};
}