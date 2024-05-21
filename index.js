// Get the current year
const currentYear = new Date().getFullYear();

// Find the span element with the id "year" inside the div with class "cy"
const yearSpan = document.querySelector(".footer-bottom #year");

// Update the content of the span element with the current year
yearSpan.textContent = currentYear;
