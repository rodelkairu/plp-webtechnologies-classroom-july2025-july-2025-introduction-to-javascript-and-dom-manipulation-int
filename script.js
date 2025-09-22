let favoriteFruit = "Mango";
let fruitCount = 3;

if (fruitCount > 5) {
  console.log("You have many fruits!");
} else {
  console.log(`You have only ${fruitCount} fruits.`);
}

// Function 1: highlight a card by ID
function highlightCard(cardId) {
  let card = document.getElementById(cardId);
  card.classList.toggle("highlight");
}

// Function 2: return a random fruit name
function getRandomFruit() {
  const fruits = ["Apple", "Banana", "Mango", "Kiwi", "Orange", "Grapes"];
  let index = Math.floor(Math.random() * fruits.length);
  return fruits[index];
}


// Loop 1: For loop logging fruit names
const fruits = ["Apple", "Banana", "Mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit #" + (i + 1) + ": " + fruits[i]);
}

// Loop 2: For..of loop
for (const fruit of fruits) {
  console.log("Yummy " + fruit);
}

// Interaction 1: Add random fruit to sidebar list
document.getElementById("add-fruit-btn").addEventListener("click", () => {
  let list = document.getElementById("fruit-list");
  let li = document.createElement("li");
  li.textContent = getRandomFruit();
  list.appendChild(li);
});

// Interaction 2: Change site title text
document.getElementById("change-title-btn").addEventListener("click", () => {
  document.querySelector("h1").textContent = "Welcome to the Fruit Universe!";
});

// Interaction 3: Highlight first card on load
window.addEventListener("DOMContentLoaded", () => {
  highlightCard("apple");
});
