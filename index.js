function practiceAdd() {
  let x = 5;
  let y = 6;
  let z = x + y;
  return z;
}

// let arnob = "Hello World: ";
// let $$$ = 33;
// let $Money = 5;                          //problem
// let add = $$$+$Money
// console.log(add)
// let z = arnob + parseInt($$$ + $Money)
// console.log(z)

// const price1 = 5;
// const price2 = 7;
// let total = price1 + price2
// console.log(total);

// const pi = 3.14;
// let person = "Arnob";
// let answer = "Yes";
// console.log(pi,'\n',
//     person,
//     answer)
// carName = "Volvo";
// console.log(carName)

// const cars = ["Audi", "Volvo", "BMW"];
// cars[0]="Toyota"
// cars.push("Jaguar")
// console.log(cars)

// const car = {type:"Fiat",model: "900", color:"Red"}
// car.color = "Green";
// car.model="800"
// console.log(car)

// let text1 = "What a very "
// text1+="nice day"
// console.log(text1)

// let x= 5+5;
// let y = "6" + 6;
// let z = "Hello" + 5;
// console.log(x, y, z)

// let x =10;
// let y = 10;
// x**=y;
// console.log(x)

// let x = 5;
// x++;
// let z =x;
// console.log(z)

// let x=5;
// let z = Math.pow(x,2)
// console.log(z)

// function myFunction(){
// let voteable;
// let age =document.getElementById("kemo").value;
// if(isNaN(age)){
//     voteable = "Input not Number"
// }
// else{
//     voteable = (age<18) ? "Vote" : "No Vote";
// }
// document.getElementById("demo").innerHTML = voteable ;

// }
// let text;
// console.log(new Date().toLocaleString());
// switch (new Date().getDay()) {
//   case 6:
//     text = "Today is Saturday";
//     break;
//   case 0:
//     text = "Today is Sunday"; //Problem
//     break;
//   default:
//     text = "Looking forward to the Weekend";
// }
// document.getElementById("demo").innerHTML = text;

// let text = "";
// let i = 1;
// while(i<10){
//     text+=i;
//     i++;
// }
// console.log(text)

// let x = false;

// // y is an object                      //Problem
// let y = new Boolean(false);
// console.log(typeof x + "<br>" + typeof y)

// let x =5<2
// console.log(x)

// let x = 4;
// let y = -7;
// let z =(x>0&&y>0);
// console.log(z)

// let name = null;
// let text = "missing"; //problem
// let result = name ?? text; //
// console.log(result);

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let len = cars.length;

// let text = "";
// for (let i = 0; i < len; i++) {
//   text += cars[i];
// }
// console.log(text)

// const cars = ["null", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = "";

// console.log("the car is", cars[0]);
// while (cars[i]) {
//   if (++i > 50) {
//     break;
//   }
//   console.log("im alive!!");
// }
// while (cars[0]) {
//   //Problem
//   text += cars[i] + "\n";
//   i++;
// }
// console.log(text);

// let text = "";

// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {       //Problem
//     if (i === 3) { break loop2; }
//     text += i + "\n";
//   }
// }
//     console.log(text)

// let text = "";

// loop1: for (let j = 1; j < 5; j++) {
//   loop2: for (let i = 1; i < 5; i++) {
//     if (i === 3) { continue loop1; }
//     text += i;
//    }
// }
// console.log(text)

// const animal = [
//   "Cow",
//   "Frog",
//   "Horse",
//   "Elephant",
//   "Ant",
//   "Lion",
//   "Tiger",
//   "Deer",
//   "Zebra",
//   "Wasp",
// ];
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {
//         continue;
//       // i =6
//       }
//       if (i == 6) {
//         break;
//       }
//   console.log(i + " " + animal[i]);
// }

// for(let i=1;i<=100; i++){
//   if(i%2==0){
//     continue;
//   }
//   console.log(i)
// }

// let text = "";
// let i = 1;
// while(i<10){
//   text+=i;
//   i++;
// }
// console.log(text)

// let firstName = "Arnob";
// let lastName = "Saha";
// let text = `${firstName},${lastName}`
// console.log(text)

// let text = "Hello World"
// console.log(text[0])

// let text = "apple, banana, qiwi"
// let part = text.slice(-12,-6)
// console.log(part)

// let textt = "Hello"
// const myArr = textt.split("")
// console.log(myArr)
// text= ""
// for (let i=0;i<myArr.length;i++){
//   text+=myArr[i] +"\n"
// }
// console.log(text)

// function myFunction(name, age) {
//   return `Hello ${name}! You are ${age}`;
// }
// let x = myFunction("Arnob", 21)
// console.log(x);
// function sum(...args) {
//   let sum = 0;
// for (let arg of args) sum += arg;  //Problem
//   return sum;
// }
// x = sum(4,9,8,6,7)
// console.log(x)

// function findMax() {
//   let max = -Infinity;
//   for (let i = 0; i < arguments.length; i++) {
//     console.log("before", arguments[i]);
//     if (arguments[i] > max) {
//       console.log("after", arguments[i]);
//       max = arguments[i];
//     }
//   }
//   return max;

// }

// console.log(findMax(4, 6, 17, 8, 9, 59));

// let myFunction = (x, y) => { return x * y };

// let result = myFunction(5, 4);
// console.log(result)

// const fruits = ["Banana", "Mango", "Apple"]
// let text = "<ul>"
// for(let i=0;i<fruits.length;i++){
//   text+="<li>" +fruits[i]+"</li>"
// }
// text+="</ul>"
// document.writeln(text)

// let x = "";
// const myObj = {
//   name: "John",
//   age: 30,
//   cars: [
//     {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
//     {name:"BMW", models:["320", "X3", "X5"]},
//     {name:"Fiat", models:["500", "Panda"]}
//   ]
// }
// for(let i in myObj.cars){
//   x+="<h2>"+myObj.cars[i].name+"</h2>"
//   for(let j in myObj.cars[i].models){
//     x+="<h1>"+myObj.cars[i].models[j]+"<h2>"
// }
// }
// document.writeln(x)




//STRING




//1.To REverse a String
function ds(s) {
  return s.split("").reverse().join("");
}


//3. Find the Longest Word in a Sentence

function findLongestWord(str) {
  var words = str.split(" ");
  console.log(words);
  var longest = "";

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }

  return longest;
}


//2. Count Vowels
//input string
function checkVoules(inputData) {
  let flag = 0;
  // const inputData;
  const voules = ["a", "A", "e", "E", "i", "I", "O", "o", "U", "u"];
  for (let i = 0; i < inputData.length; i++) {
    console.log(inputData);
    for (let j = 0; j < voules.length; j++) {
      if (voules[j] == inputData[i]) {
        flag = flag + 1;
        console.log("index ", i, " : ", inputData[i]);
        break;
      }
    }
  }
  return flag;
}







//NUMBER



//1.Even Or Odd

function checkEvenOrOdd(n) {
  if (n % 2 !== 0) {
    return "even";
  } else {
    return "odd";
  }
}


//3.Prime OR NOT
function isPrime(n) {
  if (n == 2) {
    return true;
  }

  for (let i = 3, s = Math.floor(Math.sqrt(n)); i <= s; i++) {
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
  }
}



function isPrime(num) {
  // returns boolean
  if (num <= 1) return false; // negatives
  if (num % 2 == 0 && num > 2) return false; // even numbers
  const s = Math.sqrt(num); // store the square to loop faster
  for (let i = 3; i <= s; i += 2) {
    // start from 3, stop at the square, increment in twos
    if (num % i === 0) return false; // modulo shows a divisor was found
  }
  return true;
}


// 2. Sum Of DIgits

function sumDigits(n) {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}



// try another one
function sumDigits2(n) {
  let str = String(n);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  console.log("the sum digit 2 is: ", sum);
  return sum;
}
sumDigits2(123498);






//FUNCTION





//1.square(num)

function square(num) {
  let z = num * num;
  return z;
}


//2.Default Parameters

function greet(name = "Guest") {
  return "Hello" + " " + name;
}


//3.. Higher-Order Function – Custom Filter      //Problem

//Array

//1.Find Max Number in Array

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}


//2. Remove Duplicates

const removeDuplicatesSet = (arr) => {
  return [...new Set(arr)];
};
const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 5];
console.log(removeDuplicatesSet(numbers));

//3. Nested Array Flattening
const nestedArray = [1, [2, [3, [4]]]];
const flatArray = nestedArray.flat(Infinity);
console.log(flatArray);

//MAP

//1. Create a Map of Student Grades

const studentGrades = new Map([
  ["Alice", 85],
  ["Bob", 92],
  ["John", 74],
]);


//2.
const studenttGrades = new Map([
  ["Alice", 85],
  ["Bob", 92],
  ["John", 74],
]);
const revStudentGrades = new Map(
  [...studentGrades].map(([key, value]) => [value, key])
);



//3.Count Word Frequency

function wordFreqMap(str) {
  const words = str.split(" ");
  console.log(words);

  return words.map(function (currentValue, index, items) {
    let data = items.filter((item) => item == currentValue);
    const z = _.countBy(data);
    return z;
  });
}

// const str = "geeks for geeks is for geeks";
// const result = wordFreqMap(str);

// console.log(Object.keys(result[0]), Object.values(result[0]));



//SET

//1. Convert Array to Set

function arrayToSet(array) {
  return new Set(array);
}

//2.
function setIntersection(a,b) {
  return a.intersection(b);

}
const GiveStuGrades = (studenttGrades);//to show the student grades
const ShowreverseGrades = (revStudentGrades);//to show the reverse

const createMap = (studentGrades);//Creating a map
const SumOfDigits= (sumDigits(13));//Sum of Digits
const checkPrime = (isPrime(2)); //To check prime 

const EvenOrODd = (checkEvenOrOdd(51));//Even or odd
const Check_Vowels = checkVoules("hEllo world! this is a sentence");// check Vowels

const longest_word=(findLongestWord("I am Arnoc Saha Arnob"));//to find the longest word
const reverse_string = (ds("Hello"));//to reverse a string
const find_Max = findMax(["1", "2", "3"]);//Max of an array
const input_name = greet();// for showing the name of the guest

const input_number = square(2); // for square
const input_setIntersection_a = new Set(["a", "b", "c"]); //for setIntersection parameter a
const imput_setIntersection_b = new Set(["b", "c", "d"]); //for setIntersection parameter b

let input_arrayToSet = ["1", "2", "3", "4", "4", "5", "5"]
const ArrayToSet = arrayToSet();//To Convert Array to set