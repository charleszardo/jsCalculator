$(document).ready(function(){
	var total = 0;
	var currentOp = null;
	var currentNum = ""
	
	var $button = $(".calculator li");
	$button.click(function() {
		var thisClass = $(this).attr("class");
		var thisValue = $(this).attr("id");
		if (thisClass === "num") {
			if (currenOp) {
				currentNum = currentNum + thisValue;
			} else {
				
			}
			
		} else {
			currentOp = thisValue;
		}
		console.log(total);
	})
});