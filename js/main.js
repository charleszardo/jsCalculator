$(document).ready(function(){
	var total = 0;
	
	var $button = $(".calculator li");
	$button.click(function() {
		var thisClass = $(this).attr("class");
		if (thisClass === "num") {
			console.log("num");
		} else {
			console.log("op");
		}
	})
});