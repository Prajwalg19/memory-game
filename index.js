const computerchoice = document.getElementById("computer-choice");
const userchoice = document.getElementById("user-choice");
const result = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let m, n;
possibleChoices.forEach((lmoa) =>
lmoa.addEventListener("click", function (e) {

		m = userchoice.textContent = e.target.id;
		n = computerchoice.innerHTML = comp();
		result.innerHTML = res();
	})
);
comp = () => {
	let rand = Math.floor(Math.random() * 3);
	if (rand === 0) {
		return "rock";
	}
	if (rand === 1) {
		return "paper";
	}
	if (rand === 2) {
		return "scissors";
	}
};
res = () => {
	if (m === n) {
		return "It's a draw";
	}
	if (m == "paper" && n == "rock") {
		return "You won!";
	}
	if (m == "rock" && n == "paper") {
		return "You lose";
	}
	if (m == "scissors" && n == "rock") {
		return "You lose";
	}
	if (m == "rock" && n == "scissors") {
		return "You win!";
	}
	if (m == "paper" && n == "scissors") {
		return "You lose";
	}
	if (m == "scissors" && n == "paper") {
		return "You win!";
	}
};
