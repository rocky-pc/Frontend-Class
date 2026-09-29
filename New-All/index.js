// variables

// var , let , const 

var firstName = 'Imran';
let lastName = ' Khan';
// const fullName = 'Imran Khan';
const fullName = firstName + lastName;

let message1 = 'Hello'
let message2 = 'Hi'

console.log('Welcome to JavaScript Class');
console.log(fullName);

// External Script Output Demo
const outputElement = document.getElementById('external-script-output');
if (outputElement) {
  outputElement.textContent = 'External script loaded successfully! fullName = ' + fullName;
}

// ===========================================
// Variables Detailed Examples
// ===========================================

// var vs let vs const - Declaration
var varName;
let letName;
// const constName; // This would throw an error

// var vs let vs const - Re-Assignment
var firstName2 = 'JS';
firstName2 = 'JavaScript';
console.log('var re-assigned:', firstName2);

let lastName2 = 'ES6';
lastName2 = 'EcmaScript6+';
console.log('let re-assigned:', lastName2);

// const fullName2 = 'JavaScript';
// fullName2 = 'JS ES6+'; // This would throw an error

// ===========================================
// Data Types Examples
// ===========================================

// Primitive Data Types
let str = 'Hello There!';
let height = 6.5;
let weight = 60;
let isStudent = true;
let isWorking = false;
let isPlaced;
let phone_No = null;

console.log('String:', str);
console.log('Number:', height, weight);
console.log('Boolean:', isStudent, isWorking);
console.log('Undefined:', isPlaced);
console.log('Null:', phone_No);

// Non-Primitive: Object
let student = {
    name: 'Imran Khan',
    phone: 7418994157,
    email: 'jmcimrankhan@gmail.com',
    address: {
        doorNo: 54,
        street: 'north street',
        area: 'velachery',
        city: 'chennai'
    }
};

// Create
student.nationality = 'Indian';
student.language = 'Tamil';
student.address.state = 'TamilNadu';

// Read
console.log('Student Object:', student);
console.log('Email:', student.email);
console.log('Area:', student.address.area);
console.log('Phone (box notation):', student['phone']);

// Update
student.address.doorNo = 100;
student.address.street = 'velachery main road';

// Delete
delete student.address.doorNo;
delete student.language;

// Non-Primitive: Array
let colorsx = ['red', 'green', 'blue', 'orange', 'yellow'];
colorsx[5] = 'lime';
colorsx[2] = 'darkblue';
console.log('Colors Array:', colorsx);

// ===========================================
// Operators Examples
// ===========================================

let a = 10;
let b = 2;
console.log('ADD:', a + b);
console.log('SUB:', a - b);
console.log('MUL:', a * b);
console.log('DIV:', a / b);
console.log('REMAINDER:', a % b);
console.log('EXPONENTIAL:', a ** b);

// Increment
console.log('Pre-increment:', ++a);
console.log('After pre-increment:', a);

// Decrement
console.log('Pre-decrement:', --b);
console.log('After pre-decrement:', b);

let number = 237;
number++;
console.log('number++ + ++number:', number++ + ++number);

let num = 174;
--num;
num++;
console.log('++num - ++num:', ++num - ++num);

// ===========================================
// Assignment Operator
// ===========================================

let message = 'Good Morning!';
let message12 = message;
console.log('message:', message);
console.log('message12:', message12);

// ===========================================
// Logical Operators (&&, ||, !)
// ===========================================

console.log('true && false:', true && false);
console.log('true || false:', true || false);
console.log('!true:', !true);

let age = 10;
let result = (age < 25) && (age >= 18);
console.log('age result:', result);

// ===========================================
// Conditional / Ternary Operator (? :)
// ===========================================

let numbers = 250;
let response = (numbers <= 150) ? 'Condition is True' : 'Condition is False';
console.log('ternary response:', response);

// ===========================================
// typeof Operator
// ===========================================

let datas = 'hello';
console.log('typeof data:', typeof datas);

console.log("typeof '':", typeof '');
console.log('typeof 100:', typeof 100);
console.log('typeof true:', typeof true);
console.log('typeof undefined:', typeof undefined);
console.log('typeof null:', typeof null);

console.log('typeof {}:', typeof {});
console.log('typeof []:', typeof []);

// ===========================================
// Conditional Statements - If / Else If / Else
// ===========================================

function checkTicket(age) {
  if (age <= 7) {
    return 'Free Ticket';
  } else if ((age > 7) && (age <= 50)) {
    return 'Adults Ticket - Ticket Price is 250rs';
  } else if (age > 50) {
    return 'Seniors Ticket - Ticket Price is 150rs';
  } else {
    return 'Wrong Input';
  }
}

console.log('Age 5:', checkTicket(5));
console.log('Age 25:', checkTicket(25));
console.log('Age 60:', checkTicket(60));

// Live demo helper
function checkTicketDemo() {
  const input = document.getElementById('ageInput');
  const result = document.getElementById('ticketResult');
  if (!input || !result) return;
  const age = Number(input.value);
  if (Number.isNaN(age)) {
    result.textContent = 'Please enter a valid number.';
  } else {
    result.textContent = checkTicket(age);
  }
}

// ===========================================
// Switch Case
// ===========================================

function getStudentGrade(rank) {
  switch(rank) {
    case 'A':
      return 'Good Student';
    case 'B':
      return 'Average Student';
    case 'C':
      return 'Poor Student';
    default:
      return 'Legend';
  }
}

console.log('Rank A:', getStudentGrade('A'));
console.log('Rank B:', getStudentGrade('B'));
console.log('Rank C:', getStudentGrade('C'));
console.log('Rank X:', getStudentGrade('X'));

// Live demo helper for switch case
function checkGradeDemo() {
  const input = document.getElementById('rankInput');
  const result = document.getElementById('gradeResult');
  if (!input || !result) return;
  const rank = input.value.trim().toUpperCase();
  if (!rank) {
    result.textContent = 'Please enter a rank.';
  } else {
    result.textContent = getStudentGrade(rank);
  }
}

// ===========================================
// Loops
// ===========================================

// For Loop
console.log('For Loop 1-10:');
for(let i = 1; i <= 10; i++){
  console.log(i);
}

// Array Loop
let colors = ['red','green','blue','yellow','orange','black','white'];
console.log('Colors Array:');
for(let i = 0; i < colors.length; i++){
  console.log(i + 1, colors[i]);
}

// Nested Loop
console.log('Nested Loop:');
for(let i = 1; i <= 3; i++){
  console.log('Outer Loop:', i);
  for(let j = 1; j <= 3; j++ ){
    console.log('  Inner Loop:', j);
  }
}

// Break and Continue
console.log('Break example (1-5):');
for(let j = 1; j <= 6; j++ ){
  if(j == 4){
    break;
  }
  console.log(j);
}

// While Loop
console.log('While Loop:');
let i = 0;
while(i < 5){
  console.log(i);
  i++;
}

// Do While Loop
console.log('Do While Loop:');
let j = 0;
do{
  console.log(j);
  j++;
}while(j < 5);

// ===========================================
// Scopes in JavaScript
// ===========================================

// Global Scope
let data = 'Hi';
{
  console.log('Inside block:', data);
}
console.log('Outside block:', data);

// Block Scope (will throw error if uncommented)
// {
//   let message = 'Good Morning!';
// }
// console.log(message); // Error: message is not defined

// ===========================================
// Hoisting

// Variable hoisting example
// console.log('Hoisting example - text before declaration:', text); // undefined
let text = 'Hello Guys';
console.log('Hoisting example - text after declaration:', text);

// ===========================================
// console.log("Sample");
// let dataz = 'GM';
// {
//   // console.log(dataz);
//   let dataz = 'HG';
//   console.log(dataz);
// }
// console.log(dataz);

let names = "Jegathesh S   "

console.log(names.length -1 );

console.log(names.trim().toLowerCase());
console.log(names.trim().toUpperCase());

console.log(names.at(9));

console.log(names.indexOf('e'));

console.log(names.concat(' NEW'))
console.log(names);

console.log(names.trim());
console.log(names.includes("esh"));
console.log(names.replace("esh","aaa"));
console.log(names.split(/(a)/));

console.log(names.padStart(18,"$$$").padEnd(25,"%%"))
console.log(names.padEnd(18,"$$$"))

let namez = "     *** Imbran ***    "

console.log(namez.trim())
console.log(namez)

// --------------------------------------------------- 

let pet = "Dragon";
let energy = 7;

if (energy > 3) {
  console.log(pet + " breathes fire! 🔥");
} else {
  console.log(pet + " is taking a nap. 😴");
}

let textz = "banana";
let neww = textz.replace('banana','Apple')
let output = neww
console.log(output.includes('Apple'));


// -----------------------------------------------
// ARRAY //

let colorsz = ['red', 'green', 'blue', 'orange', 'yellow'];
// colorsz[5] = 'lime';
// colorsz[2] = 'darkblue';
console.log('Colors Array:', colorsz);

console.log(colorsz.slice(2,5));

// ------------------------------------

const stack = ["B", "C"];

stack.push("D");      // ["B", "C", "D"]
console.log(stack);

stack.unshift("A");   // ["A", "B", "C", "D"]
console.log(stack);

stack.pop();          // removes "D" -> ["A", "B", "C"]
console.log(stack);

stack.shift();        // removes "A" -> ["B", "C"]
console.log(stack);


// -------------------------------------------

// Hoisting 

// hoisting is the behavior where declarations of variables, functions, and 
// classes are moved to the top of their scope during the compilation phase,
// before code execution begins. This means you can reference certain 
// identifiers before their actual declaration line, though the behavior 
// differs depending on how they are declared

// console.log(text);

// let text = 'Hello Guys';



let messagez = 'Good Morning!';

{
    // console.log(message);
    let messagez = 'Hello Guys!';
    console.log(messagez);
}
console.log(messagez);


// -------------------------------------------


// Function 

// 1.function declaration 
// 2.function invoke / call
// 3.arguments 
// 4.parameters 
// 5.return value 
// 6.default parameter 
// 7.arrow function 
// 8.anonymous function 


function add(num1,num2){
    // console.log(num1,num2);
    
    let a = num1;
    let b = num2;
    let result = a + b;
    console.log(result);
}

add(25,35);
add(100,350);
add(22,66);
add(98,142);
add(658,475);



function printName(name){
    let result = name;
    return result;
}
let firstNamez = printName('Imran');
// console.log(firstName);

let lastNamez = printName(' Khan');
// console.log(lastName);


console.log(firstNamez + lastNamez);

// ---------------------------------------------------
function params(a=5,b=6){
  console.log(a+b); 
}

params(8);

sample();
const sample = () => {
  console.log("hello");
}

// ---------------------------------------------------

// Document object model 