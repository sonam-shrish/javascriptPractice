const startGameBtn = document.getElementById('start-game-btn');

//string assignment
const ROCK = 'ROCK';
const SCISSORS = 'SCISSORS';
const PAPER = 'PAPER';
const DEFAULT_CHOICE = ROCK;
let gameIsRunning = false;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'YOU WON';
const RESULT_COMPUTER_WINS = 'COMPUTER WON';

//get player choice
const getPlayerChoice = function () {
	const selection = prompt(
		`${ROCK}, ${SCISSORS} or ${PAPER}`,
		''
	).toUpperCase();
	if (selection !== ROCK && selection !== SCISSORS && selection !== PAPER) {
		alert(`Invalid choice, we chose ${DEFAULT_CHOICE} for you.`);
		return DEFAULT_CHOICE;
	}
	return selection;
};

const getComputerChoice = function () {
	let randomNum = Math.random();
	if (randomNum < 0.34) {
		return SCISSORS;
	} else if (randomNum < 0.6) {
		return PAPER;
	} else {
		return ROCK;
	}
};

//determine the winner

const determineWinner = (cChoice, pSelection) =>
	cChoice === pSelection
		? RESULT_DRAW
		: (cChoice === SCISSORS && pSelection === PAPER) ||
		  (cChoice === PAPER && pSelection === ROCK) ||
		  (cChoice === ROCK && pSelection === SCISSORS)
		? RESULT_COMPUTER_WINS
		: RESULT_PLAYER_WINS;

// const determineWinner = function (cChoice, pSelection) {
// 	if (cChoice === pSelection) {
// 		return RESULT_DRAW;
// 	} else if (
// 		(cChoice === SCISSORS && pSelection === PAPER) ||
// 		(cChoice === PAPER && pSelection === ROCK) ||
// 		(cChoice === ROCK && pSelection === SCISSORS)
// 	) {
// 		return RESULT_COMPUTER_WINS;
// 	} else {
// 		return RESULT_PLAYER_WINS;
// 	}
// };

//start game event
startGameBtn.addEventListener('click', function startGame() {
	if (gameIsRunning) {
		return;
	}
	gameIsRunning = true;
	console.log('Starting the game');
	const playerSelection = getPlayerChoice();
	const computerChoice = getComputerChoice();
	const winner = determineWinner(computerChoice, playerSelection);

	alert(winner);
	gameIsRunning = false;
});
