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
var b = c
console.log("a is"+ " " + a);
console.log("b is"+ " " + b);

var msg = "hello";
var name = "abc";
// 
// var tweet = prompt("enter your tweet");
// var tweetCount = tweet.length;
// alert("you have written "+ tweetCount + " characters, remaining is "+ (100 - tweetCount)+ " characters");

var name = "abcd";
console.log(name.slice(2,3));

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
var ans = (num /= 3)
console.log(ans)

var mod = 16 % 4;
console.log(mod)


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

  function getOil(bottles){
      var cost = bottles*5;
    console.log(cost);
  }
  getOil(2);

  function getBottles(money){
      var noOfBottles = Math.round(money/5);
console.log("No of bottles " + noOfBottles);
  }
  getBottles(54);