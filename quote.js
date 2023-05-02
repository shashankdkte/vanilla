const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}
function newQuote() {
  loading();
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  //NO AUTHOR
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }

  //character
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  complete();
  quoteText.textContent = quote.text;
}

async function getQuotes() {
  loading();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {}
}

// EventListner

newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
});

getQuotes();
