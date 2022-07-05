let binary = "";

		function convert() {


			//convert the variable 'binary' to a array
			let binaryArray = binary.split("", binary.length);
	
			// Access and change binary variable
			binary = String(document.getElementById("binary").value);
			
			// Convert binary value to decimal
			let decimal = parseInt(binary, 2);

			//check if the input value contains only 0s and 1s
			let i = 0;
			let charCounter = 0;

			while (charCounter < binaryArray.length){
				if (binaryArray[charCounter] != 0){
					if (binaryArray[charCounter] != 1){
						i++
						charCounter++
					} else {
						charCounter++
					}
				}else{
					charCounter++
				}
			}
			if (i != 0){
				document.getElementById("result").innerHTML = "Error! Type only 0 and 1.";
			}else{
				document.getElementById("result").innerHTML = decimal;
			}

			//timeout created to make it work in a single click
			setTimeout(convert() , 20);
		}
