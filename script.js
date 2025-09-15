// ==========================
// Part 1: Variable Declarations & Conditionals
// ==========================

// Capture user's gender
let gender = prompt("Enter your gender (male/female):").toLowerCase();

// Conditional logic to determine message
let genderMessage;
if (gender === "male") {
  genderMessage = "Hello, Sir!";
} else if (gender === "female") {
  genderMessage = "Hello, Ma'am!";
} else {
  genderMessage = "Hello, there!";
}

// Output to console and webpage
console.log(genderMessage);
document.getElementById("genderResult").innerText = genderMessage;


// ==========================
// Part 2: Custom Functions
// ==========================

// Function 1: Greet by name
function greetUser(name) {
  return "Welcome, " + name + "!";
}

// Function 2: Check if age qualifies as adult
function checkAdult(age) {
  return age >= 18 ? "You are an adult." : "You are a minor.";
}

// Using the functions
let userName = prompt("Enter your name:");
let userAge = Number(prompt("Enter your age:"));
let greeting = greetUser(userName);
let adultStatus = checkAdult(userAge);

console.log(greeting, adultStatus);
document.getElementById("greetingResult").innerText = `${greeting} ${adultStatus}`;


// ==========================
// Part 3: Loop Examples
// ==========================

let loopList = document.getElementById("loopList");

// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.innerText = `For Loop Number: ${i}`;
  loopList.appendChild(li);
}

// Loop 2: While loop
let j = 1;
while (j <= 3) {
  let li = document.createElement("li");
  li.innerText = `While Loop Number: ${j}`;
  loopList.appendChild(li);
  j++;
}


// ==========================
// Part 4: DOM Interactions
// ==========================

// Interaction 1: Toggle visibility
document.getElementById("toggleBtn").onclick = function() {
  let msg = document.getElementById("toggleMessage");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
};

// Interaction 2: Change background color
document.getElementById("colorBtn").onclick = function() {
  document.body.style.backgroundColor = "#d1f0d1"; // light green
};

// Interaction 3: Dynamically add a paragraph
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was added dynamically via JavaScript.";
document.body.appendChild(newPara);
