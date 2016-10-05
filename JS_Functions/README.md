                                                        JavaScript and Functions
What is a function?
A function is just a series of statements that are grouped together into a special package in JavaScript.
Function Basics: (Traditional Function Declarations)
1.	Defined with the function keyword.
2.	Functions have to be declared.
3.	Function name is optional.
4.	Variable names can start with $, _, a..z, and/or special chars, but can’t begin with a number or don’t even use keywords.
5.	Function parameters.
6.	Function statement/series of statements.
7.	The return statement.
8.	Invoking a function by its name.

Example:
function add(a,b) {
return console.log(a+b);
}
add(2,3);
Definition Expression: Assigning a function to a variable or expression, it is also known as function literal, anonymous functions, adding name to a function is optionally.
Example: 		var plus = function (a,b) {
return console.log(a+b);
}
			Plus(2,3);

Invoke the function immediately or initialize values immediately:

Example:
var plus = function (a,b) {
return console.log(a+b);
}(2,2);
Function Invocation:
Function can be invoked by four ways:
1.	Functions.
2.	Methods.
3.	Constructors
4.	Call & Apply methods

Note:
	Function also receives arguments & this.
	If the function is having name we can call or invoke it by its name then pass it arguments – Traditional invocation.
	this keyword in traditional invocation contains global object.

Example:
function plus (a,b) {

return (
console.log(a+b);
console.log(this); //this is having window global object
console.log(arguments);
)
}
		plus(2,5);

Using functions as Objects:
In addition to the traditional way of calling functions, we can also invoke them as methods. A method is nothing more than a function that has been assigned as a property of an object.

What’s an object?
An object is nothing more than one of JavaScript's many data types, which holds regular variables which hold values, arrays (Arrays let you hold lists of elements separated by commas. Those elements can be variables, they can be strings, and they can be numbers or Booleans.), they can hold any other data type, including other objects and functions.

Invoking function as Method:
1.	The this argument points to the object.
2.	Invoke the function using not notation. See example 2 below.
3.	The binding of this happens at the invocation time.

Example: 	var info = {
			Name : “Pavan”,
			Title : “developer”,
			Links : [
			{ blog: “http://www.xyz.com” },
			{ linkedIn :  http://www.linkedln.com/pavan }
]
			};

Example: 	var calc = {
			Status: “Awesome”,
			Plus : function (a,b) {
			return (
			console.log(a+b);
			console.log(this); // this returns the “object” that has this function.
console.log(arguments);
			console.log(this.status); //
				)
			}
			}
calc.plus(2,3);

Invoking through constructor:
Functions in JS can do more than just help you create methods for existing objects. They can create new objects themselves, which is called constructing an object. Now you create an object with the new keyword. This method of creating an object is called a constructor invocation.
1.	new keyword creates a new instance of the object.
2.	Each new instance has it’s own set of properties.
3.	this argument points to the instance of the object.

Example:
            var Dog = function () {
			Var name; breed;
			return (
			console.log(this);
			)
}
firstDog = new Dog;
firstDog.name = “Rover”;
firstDog.breed = “Doberman”;
secondDog = new Dog;
secondDog.name = “Fluffy”;
secondDog.breed = “Poodle”
console.log(firstDog.name);
console.log(secondDog.name);

Expanding objects through prototypes:

What is prototype object?
JavaScript is known as a prototypal inheritance language. That means that you can base the functionality of an object on another object. Not every object can be based on another object, and as a matter of fact, every object in JavaScript is based on a different object.
That makes it kind of convenient because we don't have to keep on building the same functionality for different things. The way that we do this is by linking an object's prototype object to another.

var speak = function(saywhat) {
  console.log(saywhat);
}

var Dog = function() {
  var name, breed;
}

var Cat = function() {
  var name, breed;
}

Dog.prototype.speak = speak;
Cat.prototype.speak = speak;

firstDog = new Dog;
firstDog.name = "Rover";
firstDog.breed = "Doberman";
firstDog.speak('woof');

firstCat = new Cat;
firstCat.name = "Sniggles";
firstCat.breed = "Manx";
firstCat.speak('meow');

Invoking through Call & Apply:
When we use this technique it’s sometimes known as Indirect Invocation. That's because Call and Apply allow you to execute a function in a slightly different way. And that gives you a little bit better control over “this” argument. With Call and Apply, you can define the value of “this” argument. Now if you remember from traditional function declarations, one of the problems I mentioned is that “this” parameter is bound to the global object.
	this and arguments are in control using call & apply.
	Call passes a value and Apply lets you pass an array.

  var speak = function(what) {
  console.log(what);
  console.log(this.love);
}

// Using apply
var saySomething = {normal: "meow", love: "purr"}
speak.apply(saySomething, ['meouff']);

/* Using call
var saySomething = {normal: "meow", love: "purr"}
speak.call(saySomething, saySomething.normal);*/

The arguments Parameters:
We've been passing a specific number of elements to functions, and that's okay, but oftentimes, you either don't know how many elements you'll be needing to pass to a function or you want your function to be able to accept any number of elements. For that we can use a special object available to functions called the arguments parameter.
	In short, the job of the arguments parameter is to hold a list of all the elements passed as arguments to the function. It is an array like object.
	We can call the arguments with an index and get, say, the second argument passed to the function. Now we can also get the arguments' length, the property that gives us the amount of elements that were passed to the function.

  var plus = function() {
  var sum =  0;
  for (var i = arguments.length - 1; i >= 0; i--) {
    sum += arguments[i];
  };
  return sum;
}

console.log(plus(2,2,2,3,2,3,4));

The return Statement:
1.	Returns an expression.
2.	It is optional.
3.	Only in function body.
4.	Return sends back something to the caller.
5.	Stops execution of the function.
6.	You can have more than one.
7.	Auto semicolon insertion.

Anonymous Closures:
(function() {
  console.log('foo');
})();

This pattern is known as a self-executing function or an anonymous closure because it doesn't have a name and any variables you create inside it are only going to be accessible inside the function.
	Any variable created inside the above function is not going to be known to outside of this function.
	It protects any variables that you're creating inside this function. So, in other words, what we're doing here is we're closing the variables inside this function from the rest of the world, and that's why it's called a closure.

Variable Scope and Hoisting:
1.	Scope: Life & death of a variable.
2.	Block Scope: In most programming languages, variables have a block scope, variables live within {}
3.	Function Scope: In JavaScript, we have something different called function scope. In function scope, variables live within functions. Any variables you create with the keyword var are local to the function that they were created in. A variable you create in a parent function lives also in the child function as well.
4.	Scope Chain: JavaScript has something called a scope chain. It determines what happens when a function can't find the variable within its function. In simple terms, it's going to look for a variable up through all the parent functions.
5.	Hoisting: Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope (to the top of the current script or the current function). Wherever a var keyword appears inside a scope, then that declaration is taken to the entire scope and accessible everywhere throughout. JavaScript only hoists declarations, not initializations. Function declarations are also hoisted to the top of the current scope.

Creating and name-spacing modules:
1.	Modules let you reuse code across apps.
2.	Name-spacing protects variables - Now the first thing you do whenever you create any module is create a namespace for it. Name-spacing allows you to protect any variables that you have in your modules from any global scoped variables. This is really important because in any module, you might be using some variables that are already used by other things in that application. So we already know that we can easily encapsulate our functions within parentheses, and that protects all the variables inside those functions from the global scope.

Example:
        var ray = (function() {
		Var abc;
})(); // ray var is names-paced.

What if we want to get something out of this function, or we want to execute something that's in this function, outside in the main application?
3.	To satisfy the above condition, we are going to use a return statement that allows us to communicate back with the rest of the application. This can help us to expose things that we want our application to know about.

Example:
        var ray = (function() {

		return {
		speak: function() {
		console.log(‘hello’);
		}
		};
		})(); // By this example we are able to protect our ray variables and also able to execute a function using return statement.
Now how can we send information to our functions using an object, and then how to set defaults, just in case the user happens to call a method without initializing it.
