function FormController($scope){

	//If nothing in local storage, initialize empty array
	$scope.MFData = JSON.parse( localStorage["MFData"]  || '{"workList": []}' );

	
	$scope.saveStateToLocal = function(){ 
		localStorage["MFData"] = JSON.stringify($scope.MFData);
		console.log("Saved to local storage");
	};

	$scope.syncToServer = function(){
		console.log("Start syncing data to server");

		//Save to local storage first
		$scope.saveStateToLocal();

		//If ther is internet connection, save to db
	};

	$scope.editModel = function(m){
		$scope.model = m;
	};

	$scope.addModel = function(){
		$scope.model = {};
		$scope.MFData.workList.push($scope.model);
	};

	$scope.deleteWorkOrder = function(wo){
		var index = $scope.MFData.workList.indexOf(wo);
		console.log("Deleting index: " + index);
		$scope.MFData.workList.splice(index,1);
	};


}

