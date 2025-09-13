const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum) + 1) + minNum;

let attempts = 0;
let guess;
let running = true;

while(running == true){
    guess = window.prompt(`Please write your guess between ${minNum} and ${maxNum}:`)
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number!");
    }
    else if(guess < minNum || guess > maxNum){
        window.alert("The number you entered is not in the given range of numbers!");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too low! Try again!");
        }
        else if(guess > answer){
            window.alert("Too high! Try again!");
        }
        else{
            window.alert(`Congratulations! The answer was ${answer}. It took you ${attempts} attempts.`)
            running = false;
        }
    }
}