//External Javascript
let c=a+b;

//String 
let name= "Soma";
name = "Soma D'Souza"; //Overwrites the previous value for name
name = 'Soma D"Souza'; //If your name has quotes, you have to use other quotes for String

//Boolean
let eligibility = false;

//Null
let bug = null;

//When creating variables do not use reserved names like let, error, null and so on as they have their own meaning

//CamelCase the variale names
let firstName = "Palvreet";
let lastName = "Kaur";

//Console Log - display message for testing, track values to see if everything is going alright at different points of the code
console.log(c);
console.log(lastName);
console.log("My full name is "+firstName+" "+lastName)

//Find the datatype of a variable from Console log
console.log(typeof(eligibility))
console.log(typeof(lastName))
console.log(typeof(c))
console.log(typeof(bug))

let x= "2"; //string
let y=1;    //number
let z=x+y; //21

//Variable Naming - can have number but not start with number

let name1; let _name; let name$; 

//Constants
const PI = 3.1441;
const GRAVITY_OF_EARTH = 9.8; //SCREAMING SNAKE CASE

//Use Exponent Operator
let radius = 2;
let area = PI * (radius**2); 

//Use Modular Division Operator -Remainder of Division
let module = 37%10
let module1= PI%radius
let module3 = c%a;

//Output of Comparison Operators is Boolean
// let age = 6;
// eligibility = age>10 //boolean returns false
let age2 = 18;
eligibility = age2>10 //boolean returns true