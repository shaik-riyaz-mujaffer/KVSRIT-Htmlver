// Motivational Education Quotes
const quotes = [
    "Education is the most powerful weapon which you can use to change the world.",
    "Learning never exhausts the mind.",
    "The roots of education are bitter, but the fruit is sweet.",
    "Education is the passport to the future.",
    "An investment in knowledge pays the best interest."
];

const quoteElement = document.getElementById("quote");
let index = 0;

// Change Quotes Every 1 Second
const quoteInterval = setInterval(() => {

    quoteElement.classList.add("fade");

    setTimeout(() => {
        index = (index + 1) % quotes.length;
        quoteElement.textContent = quotes[index];
        quoteElement.classList.remove("fade");
    }, 500);

}, 1000);


// Loader Duration 3 Seconds
