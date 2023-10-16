let enterBtn = document.getElementById('enterBtn');
let resetBtn = document.getElementById('resetBtn');
let output = document.getElementById('outputText');

let randomNumber = Math.floor(Math.random()* 100);



 enterBtn.addEventListener('click', function(){
	let input = document.getElementById('userInput').value;

	if(input == randomNumber){
		output.innerHTML = 'You guessed right, it was ${randomNumber}'
		output.style.color = "green";

	} 
	else if (input > randomNumber){
		output.innerHTML = "You guessed too high";
		output.style.color = "red";
		
	};

	if (input > randomNumber) {
		output.innerHTML = "You guessed too low";
		output.style.color = "red";
	}

};

