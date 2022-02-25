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

/* love calculator using condition */
// var yourName = prompt("Enter your name");
// var partnerName = prompt("Enter your partner name");
// var loveCalculate = Math.random();
// var loveCalculate = Math.round(loveCalculate * 100) + 1;

// if (loveCalculate > 75) {
//     alert(yourName + "  💖 "+ partnerName+ " love matches wow super " + loveCalculate);
// } else {
//     alert(yourName + " " + partnerName+ " love matches " + loveCalculate);
// }

/* checking equality */
var a = 1;
var b = "1";
if(a ===b){
    console.log("yes");
}else{
    console.log("no");
}



/* love calculator using combining comparators */
// var yourName = prompt("Enter your name");
// var partnerName = prompt("Enter your partner name");
// var loveCalculate = Math.random();
// var loveCalculate = Math.round(loveCalculate * 100) + 1;

// if (loveCalculate > 75) {
//     alert(yourName + "  💖 "+ partnerName+ " love matches wow super " + loveCalculate);
// } 
// if(loveCalculate > 30 && loveCalculate <= 75){
//     alert(yourName + " 😍" + partnerName+ " love matches " + loveCalculate);

// }if(loveCalculate <= 30)
//  {
//     alert(yourName + " 👍" + partnerName+ " love matches " + loveCalculate);
// }




/* BMI Calculator */
function bmiCalculator(weight, height){
    //var bmi = weight / (height * height);
    var bmi = weight / (Math.pow(height, 2));
    return Math.round(bmi);
  }
  var bmi = bmiCalculator(80, 1.7);

  if(bmi <= 18.5){
    console.log(" Your BMI is " + bmi + ", so you are underweight.");
  }
  if(bmi > 18.5 && bmi <= 24.9){
    console.log(" Your BMI is " + bmi + ", so you have a normal weight.");
}
if(bmi > 24.9){
    console.log(" Your BMI is " + bmi + ", so you are overweight.");

}


/* Leap year calculation */

function isLeap(year){
  if(year % 4 === 0){
if(year % 100 === 0){
if(year % 400 === 0){
return "Leap year.";
}else{
  return "Not leap year.";
}
}else{
  return "Leap year.";
}
  }else{
    return "Not leap year.";
  }
}
console.log(isLeap(2012))


/* Array */
// var guestList = ["Ajith", "Sarathy", "Aravind", "Krishnan"];

// var guestName = prompt("Enter Guest name");

// if (guestList.includes(guestName)){
//   alert("Welcome");
// }else{
//   alert("May be next time");
// }

/* Adding element fizzBuzz */
// var output = [];
// var count = 1;

// function fizzBuzz(){
//   if(count % 3 === 0 && count % 5 === 0 ){
//     output.push("FizzBuzz");
//   }else if(count % 3 === 0){
//     output.push("Fizz");
//   }else if(count % 5 === 0){
//     output.push("Buzz");
//   }else{
//     output.push(count);
//   }

//   count++;
//   //or
//   //count = count + 1;
//   console.log(output);
// }
// fizzBuzz()

/* random food buying */
var names = ["Ajith", "Sarathy", "Aravind", "Krishnan"];
function whoPaying(names){
  var numberOfPeople = names.length;
  var randomPersonPostiton = Math.floor(Math.random()*numberOfPeople);
  var randomPerson = names[randomPersonPostiton];
  return randomPerson + " is going to buy lunch";
}
console.log(whoPaying(names))


/* while loop fizzBuzz */
var output = [];
var count = 1;

function fizzBuzz(){
  while(count <= 100){
  if(count % 3 === 0 && count % 5 === 0 ){
    output.push("FizzBuzz");
  }else if(count % 3 === 0){
    output.push("Fizz");
  }else if(count % 5 === 0){
    output.push("Buzz");
  }else{
    output.push(count);
  }

  count++;
  //or
  //count = count + 1;
}
  console.log(output);

}
fizzBuzz()



/* Bottle 99 to 0 */
// var numberOfBottles = 99;
// function remainingBottle(){


// while (numberOfBottles >=0){
//   var bottleWord = "bottle";
//   if(numberOfBottles === 1){
//     bottleWord = "bottles";
//   }
//   console.log(numberOfBottles + " " + bottleWord + " of beers on the wall");
// numberOfBottles--;
// }
// }remainingBottle()

var numberOfBottles = 99
while (numberOfBottles >= 0) {
    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    } 
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");
    console.log("Take one down, pass it around,");
	
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
    numberOfBottles--;
  }



  /* for loop fizzBuzz */
var output = [];

function fizzBuzz(){
  for(count = 1; count <= 100; count++){
  if(count % 3 === 0 && count % 5 === 0 ){
    output.push("FizzBuzz");
  }else if(count % 3 === 0){
    output.push("Fizz");
  }else if(count % 5 === 0){
    output.push("Buzz");
  }else{
    output.push(count);
  }

}
  console.log(output);

}
fizzBuzz()


function fibonacciGenerator(n){
  var op = [];
  if(n===1){
    op=[0];
  }
  else if(n===0){
    op=[0,1];
  }
  else{
    op=[0,1];
    for(var i=2; i<n; i++){
      op.push(op[op.length - 2] + op[op.length - 1]);
    }
  }return op;

}
 op = fibonacciGenerator(100)
console.log(op);