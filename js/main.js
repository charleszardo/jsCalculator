$(document).ready(function(){
	var currentOp = null;
	var num1 = null;
	var num2 = null;
	// used to determine if number is being built
	var onNum = null;
	// used to repeatedly hit = sign and perform previous op
	var eqStorage = [];
	
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
	var $eq = $(".eq");
	var $calc = $(".calc");
	
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
		if (currentOp && num2) {
			num1 = performOp(currentOp, num1, num2);
			num2 = null;
			currentOp = val;
		} else {
			currentOp = val;
		}
		updateTotal();
	})
	
	$eq.click(function() {
		if (num1 && num2 && currentOp) {
			num1 = performOp(currentOp, num1, num2);
			eqStorage = [num2, currentOp]
			num2 = null;
			onNum = false;
			currentOp = null;
		} else {
			num = eqStorage[0];
			op = eqStorage[1];
			num1 = performOp(op, num1, num);
		}
		updateTotal();
	})
});