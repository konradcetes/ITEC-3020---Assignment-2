var number;

function calculate(){
		number = document.getElementById('inputnum').value;
				
		//document.getElementById('Result').innerHTML = number;
		if(number<=0)
		{
			document.getElementById('Result').innerHTML = "The Number Must Be Positive";
		}
		else 
		{
			test_pal(number)
		}
}

function test_pal(number){
	var test = number;
	test = number.toString();
	test1 = test.split("").reverse().join("");
	newnum = parseInt(test1);
	/*console.log(test);
	console.log(test1);
	console.log(test2);
	console.log(test3);
	*/
	if (number == newnum){
		console.log("YES");
		document.getElementById('Result').innerHTML = "Yes    " +newnum.toString();
	}
	else{
		console.log("NO");
		document.getElementById('Result').innerHTML = "NO     " +newnum.toString();
	}

} 
	
