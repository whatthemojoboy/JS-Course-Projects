/*----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------___________________________________________________________This was written on December 9th 2024_______________________________________________________----
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/






//Constructor = special method for defining the
//              properties and methods of objects

function Car(make, model, year, color) {
  this.make = make,
  this.model = model,
  this.year = year,
  this.color = color
  this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford","Mustang",2024,"red");

console.log(car1.make,car1.model, car1.year, car1.color);
car1.drive();

//class = (ES6 feature) provides a more structured and cleaner way to
//        work with objects compared to traditional constructor functions
//        ex. static keyword, encapsulation, inheritance

class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  
  displayProduct(){
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }
  
  calcTotal(){
    return this.price + (this.price * salesTax);
  }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.99);
product1.displayProduct();

const product2 = new Product("Pants", 22.50);
product2.displayProduct();

const total = product1.calcTotal(salesTax);
console.log(`Total price (with tax): ${total.toFixed(2)}`);

//static = keyword that defines properties or methods that belong to a //class itself rather than the objects created from that class (class //owns anything static, not the objects)

class MathUtil{
  static PI = 3.14159
  
  static getDiameter(radius){
    return radius * 2;
  }
  
  static getCirc(radius){
  	return 2 * this.PI * radius;
  }
}what
what
what

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));

console.log(MathUtil.getCirc(10));

//Another example for static

class User{
  static userCount = 0;
  
  constructor(username){
    this.username = username;
    User.userCount++;
  }
}

const user1 = new User("Bob");
const user2 = new User("Nick");
console.log(user1.username);
console.log(user2.username);
console.log(user1.userCount);
/*This comes back as undefined because user1 doesnt have a userCount, it belongs to the User class because its static*/
//To get userCount, you have to use the class User
console.log(User.userCount);

//Inheritance = allows a new class to inherit properties and methods from an existing class (parent -> child)
//              helps with code reusability

class Animal{
  alive = true;
  
  eat(){
    console.log(`This ${this.name} is eating`);
  }
  
  sleep(){
    console.log(`This ${this.name} is sleeping`);
  }
}
class Rabbit extends Animal{
  name = "rabbit";
  
  run(){
    console.log(`This ${this.name} is running`);
  }
}
class Fish extends Animal{
  name = "fish";
}
//To have a parent -> child, you do new class, then put extends
//to say that the class ur currently making is a child to the
//other end of the extends, which is Animal in this case
//(Animal is the parent class)
const rabbit = new Rabbit();
const fish = new Fish();

rabbit.alive = false;

console.log(rabbit.alive);
//alive is a property
rabbit.eat();
fish.eat();
fish.sleep();
rabbit.sleep();
rabbit.run();

//super = keyword is used in classes to call the constructor or
//        access the properties and methods of a parent (superclass)
//        this = this object
//        super = the parent

class Animal{
  constructor(name, age){
    this.name = name;
    this.age = age;
    
  }
  
  move(speed){
    console.log(`the ${this.name} moves at a speed of ${speed}mph`)
  }
  
}

class Rabbit extends Animal{
  constructor(name, age, runSpeed){
    super(name, age);
    this.runSpeed = runSpeed;
  }
  
  run(){
    console.log(`This ${this.name} can run`);
    super.move(this.runSpeed);
  }
  
}

class Fish extends Animal{
    constructor(name, age, swimSpeed){
    super(name, age);
    this.swimSpeed = swimSpeed;
  }
  
}

const rabbit = new Rabbit("Joey", 1, 25);
const fish = new Fish("Magicarp", 2, 12);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
rabbit.run

//getter = special method that makes a property readable
//setter = special method that makes a property writable

//validate and modify a value when reading/writing a property

class Rectangle{
  
  constructor(width, height){
    this.width  = width;
    this.height = height;
  }
  
  //the underscore(_) is just saying that this property is special/private, developers shouldn't touch it
  
  set width(newWidth){
    if (newWidth > 0) {
      this._width = newWidth;
    }else {
      console.error("Width must be a positive number");
    }
  }
  
  set height(newHeight){
    if (newHeight > 0) {
      this._height = newHeight;
    }else {
      console.error("Height must be a positive number");
    }
  }
  
  get width(){
    return this._width.toFixed(1);
  }
  
  get height(){
    return this._height.toFixed(1);
  }
  
  //acess a value that isn't really there/initialized
  get area(){
    return (this._width * this._height).toFixed(1);
  }
}

const rectangle = new Rectangle(3, 4);

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);

/* Destructuring = extract values from arrays and objects,
                   then assign them to variables in a convenient way
                   [] = to perform array destructuring
                   {} = to perform object destructuring
                   5 examples


*/

//-------Example 1 -------
// SWAP THE VALUE OF TWO VARIABLES

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//------- Example 2 -------
//SWAP 2 ELEMENTS IN AN ARRAY

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

//------ Example 3 ------
//ASSIGN ARRAY ELEMENTS TO VARIABLES

const colorss = ["red", "green", "blue", "black", "white"];

const [firstColor, secondColor, thirdColor, ...extraColors] = colorss;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//------ Example 4 ------
//EXTRACT VALUES FROM OBJECTS

const person1 = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  job: "Fry Cook",
};

const person2 = {
  firstName: "Patrick",
  lastName: "Star",
  age: 34,
}

const {firstName, lastName, age, job="Unemployed"} = person2;
//job="Unemployed" = "unemployed" is a default value for job

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);

//------ Example 5 -------
//DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName, lastName, age, job="Unemployed"}) {
  console.log(`name: ${firstName} ${lastName}`);
  console.log(`age: ${age}`);
  console.log(`job: ${job}`);
}

const person3 = {
  firstName: "Sandy",
  lastName: "Cheeks",
  age: 37,
  job: "Scientist",
}

const person4 = {
  firstName: "Larry",
  lastName: "Lobster",
  age: "45",
}

displayPerson(person4);

/* Nested objects = Objects inside of other Objects.
   Allows you to represent more complex data structures
   Child Object is enclosed by a Parent Object
   
   Person{Address{}, ContactInfo{}}
   ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}*/
   
const person = {
  fullName: "Spongebob Squarepants",
  age: 30,
  isStudent: true,
  hobbies: ["karate", "jellyfishing", "cooking"],
  address: {
    street: "124 Conch St.",
    city: "Bikini Bottom",
    country: "Int. Water"
  }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address);
//To access the nested object properties, you still use
//the property accessor *.*
//Ex: person.address.street
//Ex2: person.address.country
//ect.
//This next code is if you want to loop through the properties

for (const property in person.address) {
  console.log(person.address[property]);
}
//                     |
//More complex Example v

class Person {
  
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}


class Address {
  
  constructor(street, city, country) {
    this.street = street;
    this.city = city;
    this.country = country;
  }
}

const person1 = new Person("Spongebob", 30, "124 Conch St.", "bikini bottom", "int. waters");

const person2 = new Person("Patrick", 37, "128 Conch St.", "bikini bottom", "int. waters");

const person3 = new Person("Squidward", 45, "126 Conch St.", "bikini bottom", "int. waters");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address.street);


// sort() = method used to sort elements of an array in place.
// Sorts elements as strings in lexicographic order, not alphabetical
// lexicographic = (alphabet + numbers + symbols) as strings

let fruits = ["apple", "banana", "orange", "coconut"];
fruits.sort();
console.log(fruits);


//Sorting Numbers
let nums = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];
nums.sort((a, b) => a - b);
console.log(nums);

// Shuffle an array using Fisher-Yates algorithm
const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
shuffle(cards);

function shuffle(array) {
  for( let i = array.length - 1; i > 0; i--){
   const random = Math.floor(Math.random() * (i + 1));
   
   [array[i], array[random] = array[random], array[i]];
  }
}

// Date objects = objects that contain values that represent dates and times
// These date objects can be changed and formatted

// date order => Date(year, month, day, hour, minute, second, ms)
// Strings pass as well => Date("2024-01-02T12:00:00Z")
const date = new Date();
console.log(date);



// Closure = A function defined inside of another function, the inner function has access to the variables and scope of the outer function.
// Allow for private variables and state maintenance
// Used frequently in JS frameworks: React, Vue, Angular

function outer(){
  
  let message = "Hello";
  function inner(){
    console.log(message);
  }
  
  inner();
}

outer();

function createCounter(){
   let count = 0;
   
   function increment(){
    let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
  }
  
    function getCount(){
      return count;
    }
  
  return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();
console.log(`The current count is ${counter.getCount()}`);

// setTimeout() = function in javascript that allows you to schedule the execution of a function after an amount of time (milliseconds)
// Times are approximate (varies based on the workload of the Javascript runtime env.)

// setTimeout(callback, delay);

function sayHello(){
  alert("hello");
}

setTimeout(sayHello, 3000);
// clearTimout(timeoutId) = can cancel a timout before it triggers

const timeoutid = setTimeout(() => alert('Hello'), 3000);

clearTimout(timeoutId);\

// ES6 Modules = An external file that contains reusable code that can be imported into other Javscript files
// Can contain variables, classes, functions ... and more
// Introduced as part of ECMAScript 2015 update

import {*insert-variables-or-functions} from './*file-name';

// Synchronous = Executes line by line consecutively in a swquential manner
// Code that waits for an operation to complete
// Asynchronous = Allows multiple operations to be performed concurrently without waiting
// Doesn't block the execution flow and allows the program to continue
// (Imput/0utput operations, network requests, fetching data)
// Handled with: Callbacks, Promises, Asnc/Await



// Error = An Object that is created to represent a problem that occurs
// Occur often with user input or establishing a connection

// try { } = Encloses code that might potentially cause an error
// catch { } = Catch and handle any thrown Errors from try { }
// finally { } = (Optional) Always executes. Used mostly for clean up ex. close files, close connections, release resources

try {

console.log(x);
// NETWORK ERRORS
// PROMISE REJECTION
// SECURITY ERRORS
}
catch(error){
  console.error(error);
}
finally{
   // CLOSE FILES
   // CLOSE CONNECTIONS
   // RELEASE RESOURCES
   
  console.log('This always executes');
}

console.log("You have reached the end!");

// New example

try {
const divident = Number(prompt("Enter a divident: "));
const divisor = Number(prompt("Enter a divisor: "));


if(divisor == 0){
  throw new Error("You can't divide by 0");
}
if(isNaN(divident) || isNaN(divisor)){
  throw new Error("Values must be a number");
}

const result = divident / divisor;
console.log(result);
}
catch(error){
  console.error(error);
}

console.log('You have reached the end!');

// DOM = DOCUMENT OBJECT MODEL
// Object{} that represents the page you see in the web browser and provides you with an API to interact with it.
// Web browser constructs the DOM when it loads an HTML document,
// and structures all the elements in a tree-like representation.
// JavaScript can access the DOM to dynamically change the content,
// structure, and style of a web page

console.dir(document);
document.title = "My website";
document.body.style.backgroungColor = "black";

// Element selectors = Methods used to target and manipulate HTML elements
// They allow you to select one ore multiple HTML elements
// from the DOM (Document Object Model)

// 1. document.getElementById()       // Element or null
// 2. document.getElementsByClassName() // HTML collection  ITERABLE
// 3. document.getElementsByTagName() // HTML collection
// 4. document.querySelector()        // First  element or null
// 5. document.querySelectorAll()     // Nodelist (static, dont update automatically in the dom)
// You can typecast them with Array.*Insert array functions*


const fruits = document.getElementsByClassName("* INSTERT CLASS NAME *");
fruits[0].style.backgroundColor = "yellow";
Array.from(fruits).forEach(fruit => {
  fruit.style.backgroundColor = "yellow";
});

const elements = document.getElementsByTagName("* INSERT HTML TAGE NAME *");
const listItemts = document.getElementsByTagName("* INSERT TAGE FOR LIST ELEMENTS");
for (let element of elements){
  element.style.backgroundColor = "yellow";
}
for (let listItem of listItems){
  listItem.style.backgroundColor = "lightgreen";
}
Array.from(listItems).forEach(listItem => {
  listItem.style.backgroundColor = "lightgreen";
});


const element = document.querySelector(".*insert class name*");

const element = document.querySelector("*insert tage name*");


const foods = document.querySelectorAll("*inser tag or class*");
foods.forEach(food => {
  food.style.backgroundColor = "yellow";
});


// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//------ .firstElementChild ------
 
const elements = document.querySelectorAll("ul");

elements.forEach(element => {
  const firstChild = element.firstElementChild;
  firstChild.style.backgroundColor = "yellow";
  // Highlight all first children of ul
});

//------ .lastElementChild ------

const element = document.getElementById("fruits");
const lastChild = element.getLastElementChild;
lastChild.style.backgroundColor = "yellow";

//------ .nextElementSibling ------

const element = document.getElementById("apple");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";


//the ul are all children of the body
const element = document.getElementById("fruits");
const nextSibling = element.nextElementSibling;
nextSibling.style.backgroundColor = "yellow";

//------ .previousElementSibling ------

const element = document.getElementById("banana");
const prevSib = element.previousSibling;
prevSib.style.backgroundColor = "yellow";

//------ .parentElement ------

const element = document.getElementById("apple");
const parent = element.parentElement;
parent.style.backgroundColor = "yellow";

//------ .children ------

const element = document.getElementById("fruits");
const children = element.children;

Array.from(children).forEach(child => {
  child.style.backgroundColor = "yellow";
});

//Add or remove elements with JS

//------ EXAMPLE <h1> ------
// Step 1: Create the element
const newh1 = document.createElement("h1");
// Step 2: Add attributes/properties
newh1.textContent = "I like pizza";
newh1.id = "myh1";
newh1.style.color = "tomato";
newh1.style.textAlign = "center";

// Step 3: Append Element to DOM
//document.body.append(newh1);
//document.body.prepend(newh1);
document.getElementById("box1").append(newh1);
//const box2 = document.getElementById("box2");
//document.body.insertBefore(newh1, box2);
/* if there is no id for the box elements */
//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newh1, boxes[1]);
// REMOVE HTML ELEMENT
//document.body.removeChild(newh1);
document.getElementById("box1").removeChild(newh1);

// EventListener = Listen for specific events to create interactive web pages
// Events: click, mouseover, mouseout
// .addEventListener(event, callback);
const mybtn = document.getElementById("mybtn")
const mybox = document.getElementById("mybox");

function changeColor(event) {
  mybox.style.backgroundColor = "tomato";
  mybox.textContent = "Ouch!";
}
//Can also pass an anonymous function or arrow function in the callback section
mybtn.addEventListener('click', changeColor);

//------ mouseover event ------
mybox.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Dont, do it!!";
});

//------ mouseout ------
mybox.addEventListener('mouseout', event => {
    event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "Click me";
});

// EventListeners for keyboard input
// Events: keydown, keyup
// document.addEventListener(event, callback);

document.addEventListener("keydown", event => {
  console.log(event.key);
});
document.addEventListener("keyup", event => {
  console.log(`Key up = ${event.key}`);
});


// NodeList = Static collection of HTML elements by (id, class, element)
// Can be created by using querySelectorAll()
// Similar to an array, but no (map, filter, reduce)
// NodeList won't update to automatically reflect changes to the DOM

let btns = document.querySelectorAll('.mybtn');
// ADD HTML/CSS PROPERTIES
btns.forEach(button => {
  btn.style.backgroundColor = "green";
  btn.textContent += "Weee!";
  
});

// CLICK event listener
btns.forEach(btn => {
  btn.addEventListener('click', event => {
    event.target.style.backgroundColor = "tomato";
    
  });
});

// MOUSEOVER + MOUSEOUT event listener
btns.forEach(btn => {
  btn.addEventListener('mouseover', event => {
   event.target.style.backgroundColor = "lightblue";
  });
});

btns.forEach(btn => {
  btn.addEventListener('mouseout', event => {
   event.target.style.backgroundColor = "yellow";
  });
});
// ADD AN ELEMENT
const newbtn = document.createElement("button");
newbtn.textContent = "Button 5";
newbtn.classList = "mybtn";
document.body.appendChild(newbtn);
// ADD TO NODELIST
btns = document.querySelectorAll('.mybtn');
// REMOVE AN ELEMENT
btns.forEach(btn => {
  btn.addEventListener('click', event => {
    event.target.remove();
    btns = document.querySelectorAll('.mybtn');
  });
});


// classList = Element property in JavaScript used to interact
//             with an element's list of classes (CSS classes)
//             Allows you to make reusable classes for many elements
//             across your webpage

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// cotains()

const h1 = document.getElementById('h1');
const mybtn = document.getElementById('mybtn');

h1.classList.add('enabled');
mybtn.classList.add('enabled');

h1.addEventListener('click', event => {
  
  if( event.target.classList.contains('disabled')) {
    event.target.textContent += "Yo"
    
  }else{
    event.target.classList.replace('enabled', 'disabled');
  }
  
});



mybtn.addEventListener('click', event => {
  
  if( event.target.classList.contains('disabled')) {
    event.target.textContent += "Yo"
    
  }else{
    event.target.classList.replace('enabled', 'disabled');
  }
  
});

// ClassList Challenge with NodeList

let btns = document.querySelectorAll('.mybtns');

btns.forEach(btn => {
  btn.classList.add('enabled');
});

btns.forEach(btn => {
  btn.addEventListener('mouseover', event => {
    event.target.classList.toggle('hover');
  });
});

btns.forEach(btn => {
  btn.addEventListener('mouseout', event => {
    event.target.classList.toggle('hover');
  });
});

btns.forEach(btn => {
  btn.addEventListener('click', event => {
    
    if(event.target.classList.contains('disabled')) {
      event.target.textContent += '💣';
    }else {
      event.target.classList.replace('enabled', 'disabled');
    }
    
  });
});

// CallBack Hell = Situation in JavaScript where callbacks are nested
//                 within each other callbacks to the degree where the code
//                 is difficult to read.
//  Old pattern to handle asynchronous functions
//  Use Promises + async/await to avoid Callback Hell

function task1(callback) {
  setTimeout(() => {
    console.log('Task 1 complete');
    callback();
  }, 2000);
}
 function task2(callback) {
  setTimeout(() => {
    console.log('Task 2 complete');
    callback();
  }, 2000);
}
 function task3(callback) {
  setTimeout(() => {
    console.log('Task 3 complete');
    callback();
  }, 2000);
}
 function task4(callback) {
  setTimeout(() => {
    console.log('Task 4 complete');
  }, 2000);
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => {
        console.log('Tasks Finished');
      });
      
// Promise = An Object that manages asynchronous operations
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOVLED or REJECTED
// new Promise((resolve, reject) => {asynchronous code})

// DO THESE CHORES IN ORDER

// 1. Walk the dog
// 2. Clean the kitched
// 3. Take out the trash

function walkDog() {
  
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    resolve('You walked the dog');
  }, 1000);
  });
}

function cleanKitchen() {
  
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    resolve('You cleaned the Kitchen');
  }, 200);
  });
}

function takeOutTrash() {
  
  return new Promise((resolve, reject) => {
      setTimeout(() => {
    resolve('You took out the trash');
  }, 1000);
  });
}

walkDog().then(value => {
  console.log(value); return cleanKitchen();
}).then(value => {
  console.log(value); return takeOutTrash();
});

// Async/Await = Async = makes a function return a promise
// Await = makes amn async function wait for a promise

// Allows you to write asynchronous code in a synchronous manner
// Async doesn't have resolve or reject parameters
// Everything after Await is placed in an event queue

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const dogwalked = false;
      
      if(dogwalked){
        resolve("You walked the dog");
      }else {
        reject("You didn't walk the dog");
      }
      
    }, 5000);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const cleankitchen = true;
      
      if(cleankitchen){
        resolve("You cleaned the kitchen");
      }else {
        reject("You didn't clean the kitchen");
      }
      
    }, 2000);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      
      const takeouttrash = true;
      
      if(takeouttrash){
        resolve("You took out the trash");
      }else {
        reject("You didn't take out the trash");
      }
      
    }, 1000);
  });
}

async function doChores() {
  
  try {
  const walkDogResult = await walkDog();
  console.log(walkDogResult);
  
  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);
  
  const takeouttrashresult = await takeOutTrash();
  console.log(takeouttrashresult);
  
  console.log("You finished all the chores!");
  
    
  }catch(error) {
    console.error(error);
  }
}

doChores();

// JSON = (JavaScript Object Notation) data-interchange format
// Used for exchanging data between a server and a web application
// JSON files {key:value} OR [value1, value2, value3]

// JSON.stringify() = converts a JS object to a JSON string
// JSON.parse() = converts a JSON string to a JS object

//** GO TO JSON FILE FOR THIS EXAMPLE **
// To convert these objects to json string, surround them with backtricks

const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const jsonPerson = `{"name": "Spongebob", "age": 30, "isEmployed": true, "hobbies": ["Jellyfishing", "Karate", "Cooking"]}`;
const jsonPeople = `[{"name": "Spongebob", "age": 30, "isEmployed": true},
                {"name": "Patrick", "age": 37, "isEmployed": false},
                {"name": "Squidward", "age": 50, "isEmployed": true},
                {"name": "Sandy", "age": 27, "isEmployed": false}]`;

const jsonString = JSON.stringify(person);

const parsedData = JSON.parse(jsonPeople);
console.log(parsedData);

// Fetch data from json file
fetch("person.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));

