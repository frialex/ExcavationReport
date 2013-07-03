function FormController($scope){

	$scope.MFData 				= {};
	$scope.MFData.inspectorName = "From scope";
	$scope.MFData.area 			= "Gas Inspection";
	$scope.MFData.from 			= "NO Date";
	$scope.MFData.to 			= "NO Date";


	$scope.saveStateToLocal = function(){ localStorage["MFData"] = JSON.stringify($scope.MFData);}

};
