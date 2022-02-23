// alert("hey")
/*Selecting HTML Elements with JavaScript */

// document.getElements - this will give a Array for values

//to select all the elements with the tag name
//this will give Array 
console.log(document.getElementsByTagName("li"));

//selecting the specific list
//to select item in the array use []
console.log(document.getElementsByTagName("li")[1].style.color="red");


//to see how many elements in the tag name li in the document
console.log(document.getElementsByTagName("li").length)

//to select the elements with the class name
// even if there is only one btn, need to specify the Array position [0]
console.log(document.getElementsByClassName("btn")[0].style.color="red");


// document.getElement - this will give a single result

//to select the element with the id
console.log(document.getElementById("title"))
//to edit something use innerHTML on the specific id
console.log(document.getElementById("title").innerHTML="Hey");

//querySelector can use id,class name, tag name, multiple selectors
console.log(document.querySelector("h1")); //tag name
console.log(document.querySelector(".btn")) //class
console.log(document.querySelector("#list")) //id
console.log(document.querySelector("li a")) //multiple selectors

//querySelector will select only the fist item
console.log(document.querySelector("#list .item")) //multiple selectors

//to select all the item in the list use querySelectorAll
console.log(document.querySelectorAll("#list .item")) //multiple selectors

//selecting the specific list
//to select item in the array use []
console.log(document.querySelectorAll("#list .item")[0].style.color="green") //multiple selectors

//selecting the anchor tag inside the list and coloring 
console.log(document.querySelectorAll("#list .item > a")[0].style.color="green") //multiple selectors
/* mostly querySelector and querySelectorAll is used in js */

//coloring the be color of button
console.log(document.querySelectorAll(".btn")[0].style.backgroundColor="green")



/* The Separation of concerns */
//adding class name to h1 from js
//also we can remove the class name use remove instead of add 
console.log(document.querySelector("h1").classList.add("huge")) 



/* Text manipulation */
document.querySelector("h1").innerHTML = "<em>Hello</em>";

/* HTML Element Attribute */
//shows anchor tag
console.log(document.querySelector("a"));

//shows the attribute of the anchor tag "href"
console.log(document.querySelector("a").attributes);
//it will show what is in the attribute
console.log(document.querySelector("a").getAttribute("href"));
//to change the value in the href
//to change two properties needed "href" and what we going to change "https://www.facebook.com"
console.log(document.querySelector("a").setAttribute("href", "https://www.facebook.com"));






