// var a = 1;
// var b = 2;
// console.log(a+b);
// alert("hello");
// window.alert("Javascript");
// console.log(typeof(123));
// prompt("Enter your name");

// var myName = "hello";
// var yourName = prompt("Enter your name");
// // console.log(yourName);

// console.log("i am" + " " + myName +", welcome to my course" + yourName);

var a = 3;
var b = 8;

var c = a;
var a = b;
var b = c;
console.log("a is" + " " + a);
console.log("b is" + " " + b);

var msg = "hello";
var name = "abc";
//
// var tweet = prompt("enter your tweet");
// var tweetCount = tweet.length;
// alert("you have written "+ tweetCount + " characters, remaining is "+ (100 - tweetCount)+ " characters");

var name1 = "abcd";
console.log(name1.slice(2, 3));

// var tweet = prompt("enter tweet");
// var tweetCount = tweet.slice(0,10);
// alert(tweetCount);

// var yourName = prompt("enter your name");
// console.log(yourName.toUpperCase());

// var yourName = prompt("Enter your name");
// var enteredName = yourName.slice(0,1)
// var firstLetter = enteredName.toUpperCase()
// var restName = yourName.slice(1,yourName.length)
// var remainLetter = restName.toLocaleLowerCase()
// var finalName = firstLetter + remainLetter
// alert("hello, "+finalName)

// var dogAge = prompt("Enter your dog age");
// var humanAge = ((dogAge - 2)*4) + 21;
// alert("Human age of your dog is "+ humanAge);

var num = 12;
var ans = (num / 3);
console.log(ans);

var mod = 16 % 4;
console.log(mod);

// function
// function getMilk(){
//     console.log("got milk")
// }
// getMilk();

function getMilk() {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

function getOil(bottles) {
  var cost = bottles * 5;
  console.log(cost);
}
getOil(2);

function getBottle(moneys) {
  var noOfBottle = Math.round(moneys / 5);
  console.log("No of bottles " + noOfBottle);
}
getBottle(54);

function lifeInWeeks(age) {
  var days = (365 * 90) - (365 * age);
  var weeks = (52 * 90) - (52 * age);
  var months = (12 * 90) - (12 * age);
  console.log(days);
  console.log(weeks);
  console.log(months);
  console.log("you have "+ days+" days, " + weeks + " weeks, " + "and "+ months +" months left");
}
lifeInWeeks(56);

function lifeInWeek(age) {
    var yearsRemaining = 30 - age
    var days = yearsRemaining*365
    var weeks = yearsRemaining*52
    var months = yearsRemaining*12
    
    console.log("you have "+ days+" days, " + weeks + " weeks, " + "and "+ months +" months left");
  }
  lifeInWeek(27);


  // function output and return
  function getBalance(money){
      return money % 5;
  }
  var balance = getBalance(50);
  console.log(balance);


/*No of bottles and remaining amount */
/* method 1 */
  function getBottles(money) {
    var noOfBottles = Math.round(money / 5);
    console.log("No of bottles " + noOfBottles);
    return money % 5
  }
 var change = getBottles(5);
console.log("the remaining balance is " + change);

/* method 2 */
function getBottles(money) {
  // var noOfBottles = Math.round(money / 5);
  console.log("No of bottles " + calBottles(money , 5));
  return money % 5;
}
function calBottles(startingMoney, costPerBottle){
  var numberOfBottles = Math.round(startingMoney / costPerBottle);
return numberOfBottles;
}
getBottles(5)



/* method 3 */
function getBottles(money) {
  // var noOfBottles = Math.round(money / 5);
  console.log("No of bottles " + calBottles(money , 5));
  return calchange(money, 5);
}
function calBottles(startingMoney, costPerBottle){
  var numberOfBottles = Math.round(startingMoney / costPerBottle);
return numberOfBottles;
}
function calchange(startingAmount, costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}
console.log("Master the remaining balance is "+ getBottles(11))




/* method 4 */
function getBottles(money, costPerBottle) {
  // var noOfBottles = Math.round(money / 5);
  console.log("No of bottles " + calBottles(money , costPerBottle));
  return calchange(money, costPerBottle);
}
function calBottles(startingMoney, costPerBottle){
  var numberOfBottles = Math.round(startingMoney / costPerBottle);
return numberOfBottles;
}
function calchange(startingAmount, costPerBottle){
  var change = startingAmount % costPerBottle;
  return change;
}
console.log("Master the remaining balance is "+ getBottles(100, 99.9));


/* BMI Calculator */
function bmiCalculator(weight, height){
  //var bmi = weight / (height * height);
  var bmi = weight / (Math.pow(height, 2));
  return Math.round(bmi);
}
var bmi = bmiCalculator(68, 1.7);
console.log("BMI is " + bmi);