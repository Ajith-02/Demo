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
var yourName = prompt("Enter your name");
var enteredName = yourName.slice(0,1)
var firstLetter = enteredName.toUpperCase()
alert(firstLetter)