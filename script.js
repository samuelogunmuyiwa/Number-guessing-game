let enterBtn = document.getElementById('enterBtn');
let resetBtn = document.getElementById('resetBtn');
let output = document.getElementById('outputText');

let numberOfGuesses = 0;

let randomNumber = Math.floor(Math.random() * 100);

console.log(randomNumber);

enterBtn.addEventListener('click', function (){
   let input = parseInt(document.getElementById('userInput').value);

   numberOfGuesses += 1;
   if (numberOfGuesses > 3) {
      output.innerHTML = `You have exceeded the number of tries! The correct answer was
		 ${randomNumber}`;
      return;
   }

   console.log(input);

   if (input === randomNumber) {
      output.innerHTML = `You guessed right, it was ${randomNumber}.`
      output.style.color = "green";
   } else if (input > randomNumber) {
      output.innerHTML = "You guessed too high!";
      output.style.color = "red";

   };

   if (input < randomNumber) {
      output.innerHTML = "You guessed too low!";
      output.style.color = "red";
   }

});

resetBtn.addEventListener('click', function () {
   output.innerHTML = "Enter a number below:";
   randomNumber = Math.floor(Math.random() * 100);
   output.style.color = "black";
   document.getElementById('userInput').value = '';

});