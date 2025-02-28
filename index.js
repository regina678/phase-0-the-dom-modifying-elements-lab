// Write your code here!
// Remove the <main> element
document.querySelector("main#main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the id to "victory"
newHeader.id = "victory";

// Set the text content
newHeader.textContent = " Wanjiru Kariuki is the champion";

// Append the new header to the body
document.body.appendChild(newHeader);
