//Intermediate JavaScript

/* Random Number */
var n = Math.random();
console.log(n);


/* we can scale it for our desired range (n * range), 
   although it will give 0 to range in 16 digit decimal number,
   use   Math.round(n * range) for whole number and to not start with 0 add + 1
   Math.round(n * range) + 1
   */

var n = Math.random();
var n = Math.round(n * 6) + 1;
console.log(n);

/* love calculator */
var yourName = prompt("Enter your name");
var partnerName = prompt("Enter your partner name");
var loveCalculate = Math.random();
var loveCalculate = Math.round(loveCalculate * 100) + 1;
alert(yourName + "  💖 "+ partnerName+ " love matches " + loveCalculate);