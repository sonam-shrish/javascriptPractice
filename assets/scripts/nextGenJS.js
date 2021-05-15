//CLASSES

// class pTestClass {
// 	address = 'Kathmandu';
// 	printAddress() {
// 		console.log('I live in ' + this.address);
// 	}
// }
// // class testClass extends pTestClass {
// // 	constructor() {
// // 		this.name = 'Sonam';
// // 		this.age = 17;
// // 		this.height = 5.5;
// // 	}
// // 	testMeth() {
// // 		console.log(this.name);
// // 	}
// // }
// class testClass extends pTestClass {
// 	name = 'sonam';
// 	age = '17';
// 	height = 5.5;
// 	mobile;
// 	testMeth() {
// 		console.log(this.name);
// 	}
// }

// // class testClass extends pTestClass {
// // 	constructor() {
// // 		this.name = 'sonam';
// // 		this.age = '17';
// // 		this.height = 5.5;
// // 		this.mobile;
// // 	}
// // 	testMeth() {
// // 		console.log(this.name);
// // 	}
// // }

// let sonam = new testClass();
// console.log(sonam);
// sonam.testMeth();
// console.log(sonam.address);
// sonam.mobile = 999;
// sonam.crush = 'Riya';
// console.log(sonam);
// sonam.printAddress();

//SPREAD AND REST OPERATOR
// const arr1 = [1, 2, 3];
// let newArr = [...arr1, 4, 5, 6];
// console.log(newArr);

// const obj1 = { a: 1, b: 2 };
// let newObj = { ...obj1, c: 3 };
// console.log(newObj);

// const sprFunc = (...args) => {
// 	console.log(args.filter((a) => a === 3));
// };
// sprFunc(1, 2, 3);
