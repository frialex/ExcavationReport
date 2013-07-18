function FormController($scope){

	$scope.MFData 				= {};
	$scope.MFData.inspectorName = "From scope";
	$scope.MFData.area 			= "Gas Inspection";
	$scope.MFData.from 			= "NO Date";
	$scope.MFData.to 			= "NO Date";
	$scope.MFData.workList 		= [];


	$scope.saveStateToLocal = function(){ localStorage["MFData"] = JSON.stringify($scope.MFData);}

	$scope.$on('AddNewWorkOrder', function(wo){
		console.log("Received save signal for: " + wo);
		$scope.MFData.workList.push(wo);
	});

};


function InputController($scope){
	$scope.submission = {}

	$scope.saveWorkOrder = function(){
		$scope.$emit('AddNewWorkOrder', $scope.submission);
		console.log("Emitting save signal for " + $scope.submission);
		}
}