const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("button");
const api_url = "https://api.quotable.io/random";


button.addEventListener('click', () => {
    getQuote(api_url);
})


async function getQuote(url) {
  const response = await fetch(url);
  let data = await response.json();
  console.log(data);
  quote.innerText = data.content;
  author.innerText = data.author;
}
getQuote(api_url);


