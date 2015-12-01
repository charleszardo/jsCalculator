$(document).ready(function(){
	var currentOp = null;
	var num1 = null;
	var num2 = null;
	var onNum = null;
	
	function performOp(op, num1, num2) {
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		switch (op) {
			case "+": return num1 + num2;
			case "-": return num1 - num2;
			case "/": return num1 / num2;
			case "x": return num1 * num2;
		}
	}
	
	function updateTotal() {
		$total = $("#total");
		if (onNum === 2) {
			$total.text(num2);
		} else {
			$total.text(num1);
		}
	}
	
	var $num = $(".num");
	var $op = $(".op");
	
	$num.click(function() {
		var val = $(this).attr("id");
		if (!num1) {
			num1 = val;
			onNum = 1;
		} else if (onNum === 1) {
			num1 += val;
		} else if (onNum){
			num2 += val;
		} else {
			num2 = val;
			onNum = 2;
		}
		updateTotal();
	})
	
	$op.click(function() {
		var val = $(this).attr("id");
		onNum = false;
		if (currentOp) {
			num1 = performOp(currentOp, num1, num2);
			num2 = null;
			currentOp = val;
		} else {
			currentOp = val;
		}
		updateTotal();
	})
});