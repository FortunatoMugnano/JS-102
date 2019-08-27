
let text = document.querySelector(".article__header")
text.textContent = "Welcome to Fortunato's blog!";

const el = document.querySelectorAll(".article__header");
console.log("What is element", el);
for (let i=0; i<el.length; i++){
    el[i].classList.add("important")
}

const rem = document.querySelector(".dashed");
console.log("what is rem", rem);
rem.classList.remove("dashed");

const newEl = document.querySelector(".article__footer");
console.log("what is newEl", newEl);
newEl.classList.remove("article__footer");

const gold = document.querySelector(".article").classList.add("goldenrod");




