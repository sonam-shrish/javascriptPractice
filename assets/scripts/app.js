import def from './vendor';

let currentResult = 0;
currentResult = currentResult + 10;

// outputResult(currentResult, "hello \n ' world");

const parentFunc = () => {
	let p = 1;
	let hey = () => {
		console.log(hey);
	};
	const childFunc = () => {
		console.log(p);
		hey();
	};
	childFunc();
};
parentFunc();
