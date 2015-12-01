$(document).ready(function(){
	var total = 0;
	var currentOp = null;
	var num1 = null;
	var num2 = null;
	
	var $button = $(".calculator li");
	$button.click(function() {
		var thisClass = $(this).attr("class");
		var thisValue = $(this).attr("id");
		if (thisClass === "num") {
			if (!num1) {
				num1 = thisValue;
			} else {
				num2 = thisValue;
			}
		} else {
			currentOp = thisValue;
		}
		console.log(total);
	})
});