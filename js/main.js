$(document).ready(function(){
	// onNum is used to determine if number is being built
	// eqStorage is used to repeatedly hit = sign and perform previous op
	var currentOp, num1, num2, onNum,
			eqStorage = [];
	
	function performOp(op, num1, num2) {
		num1 = parseFloat(num1);
		num2 = parseFloat(num2);
		switch (op) {
			case "add": return num1 + num2;
			case "subtract": return num1 - num2;
			case "divide": return num1 / num2;
			case "multiply": return num1 * num2;
		}
	}
	
	function allClear() {
		currentOp = null;
		num1 = null;
		num2 = null;
		onNum = null;
		eqStorage = [];
		$total.text(0)
	}
	
	function clearEntry() {
		if (!num1) {
			// do nothing
		} else if (onNum === 1) {
			num1 = null;
			onNum = false;
		} else if (onNum === 2) {
			num2 = null;
			onNum = false;
		} else {
			currentOp = null;
		}
	}
	
	function updateTotal() {
		if (onNum === 2) {
			$total.text(num2);
		} else {
			$total.text(num1);
		}
	}
	
	function percent() {
		if (onNum === 1) {
			num1 = num1 / 100;
		} else if (onNum === 2) {
			num2 = num2 / 100;
		} else {
			// do nothing
		}
	}
	
	var $total = $("#total");
	var $num = $(".num");
	var $op = $(".op");
	var $eq = $(".eq");
	var $calc = $(".calc");
	var $ac = $("#ac");
	var $ce = $("#ce");
	var $perc = $("#perc")
	
	$ac.click(function() {
		allClear();
	})
	
	$ce.click(function() {
		clearEntry();
		updateTotal();
	})
	
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
	
	$perc.click(function() {
		percent();
		updateTotal();
	})
});