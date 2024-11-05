let h1 = document.querySelector("h1");
let h2 = document.querySelector("h2");
let getBtn = document.querySelector("#getBtn");
let badge = document.querySelector(".badge");
let navbar = document.querySelector(".navbar");
let logo = document.querySelector(".navbar-brand");
let container = document.querySelector("#container");
let card = document.querySelector(".card");

const fetchQuote = async () => {
try{ 
 const response = await fetch("https://dummyjson.com/quotes/random");
  const data = await response.json();
  h1.innerText = data.quote
  h2.innerText = data.author;
  badge.innerText = data.tags[0];
}
catch{

}

};

getBtn.addEventListener("click", fetchQuote);

fetchQuote();

// setInterval(() => {
//   fetchQuote();
// }, 5000);

let themeBtn = document.querySelector("#themeBtn");

let count = 0;

const changeTheme = () => {
  if (count % 2 === 0) {
    navbar.className = "navbar bg-dark shadow";
    themeBtn.className = "btn btn-sm btn-secondary rounded-0";
    logo.className = "navbar-brand mb-0 h1 text-light";
    container.className = "container-fluid p-5 bg-secondary";
    card.className = "card p-3 shadow-lg my-3 rounded-0 bg-dark text-light";
    themeBtn.innerText = "Light Mode";
  } else {
    navbar.className = "navbar bg-light shadow";
    themeBtn.className = "btn btn-sm btn-dark rounded-0";
    logo.className = "navbar-brand mb-0 h1";
    container.className = "container-fluid p-5";
    card.className = "card p-3 shadow-lg my-3 rounded-0";
    themeBtn.innerText = "Dark Mode";
  }

  count++;
};

themeBtn.addEventListener("click", changeTheme);
