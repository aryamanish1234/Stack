// Q1. Explain what a callback function is and provide a simple example.
/*
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
Example 
function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
*/

/*Question 2: Given a sentence, reverse each word in the sentence.
Input: "JS is popular"
Output: "popular is JS"*/




// JavaScript program to reverse a string

/*var s = ["JS is popular "];

var ans = "";
for (var i = 5; i >= 0; i--) {
    ans += s[i] + " ";
}
document.write("Reversed String:" + "<br>");
document.write(ans.slice(0, ans.length - 1));
*/
let stack = document.querySelector(".stack");

[...stack.children].reverse().forEach(i => stack.append(i));
[...stack.children].reverse().forEach(i => stack.remove(1));

stack.addEventListener("click", swap);

function swap(e) {
    let card = document.querySelector(".card:last-child");
    if (e.target !== card) return;
    card.style.animation = "swap 700ms forwards";

    setTimeout(() => {
        card.style.animation = "";
        stack.prepend(card);
    }, 700);
}