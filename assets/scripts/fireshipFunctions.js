//NAMED FUNCTION DECLARATION/STATEMENT/DEFINITION
// there's only two hard things in computer science: cache-invalidation, naming things and off by one errors
//choosing the right name for your function is as hard as making jokes on programming

function functionName(params) {
	//function body
	// A FUNCTION DOES TWO THINGS
	//PERFORM A TASK or SIDE EFFECT
	//RETURN A VALUE
}

functionName(arguments);
//PARAMETERS VS ARGUMENTS
//parameters are the variable that you pass into the function while declaring it and arguments are the values you pass into the function call

//in order to execute the function you need to call it first

//FUNCTIONAL EXPRESSIONS: using a function as a value

//!!!!!Function declaration is hoisted, function expression using let or const is not.
//The function declaration is always placed at the top of the scope.

//FUNCTION DECLARATION VS FUNCTION DECLARATION. Which to choose?
//no fixed rule
//but prefer function expression fo two reasons
//helps to make sense of the context where the function belongs.
//avoids pollute global namespace
