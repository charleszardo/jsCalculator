$(document).ready(function(){
	var total = 0;
	var currentOp = null;
	var num1 = null;
	var num2 = null;
	
	function performOp(op, num1, num2) {
		
	}
	
	var $button = $(".calculator li");
	$button.click(function() {
		var thisClass = $(this).attr("class");
		var thisValue = $(this).attr("id");
		if (thisClass === "num") {
			if (!num1) {
				num1 = thisValue;
			} else {
				num2 = thisValue;
			}g
		} else {
			if (num1 && num2) {
				
			}
			currentOp = thisValue;
		}
		console.log(total);
	})
});