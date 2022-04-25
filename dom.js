var window= document.images[0];
var value = document.getElementById("title1");
value.style.color="red";
value.textContent = "painted red";
var link = document.getElementsByClassName("link");
var text=link[0].textContent = "readthatclass";
console.log(text);

var titles= document.getElementsByTagName("h1");
console.log(titles);

var queryValue = document.querySelectorAll(".link");
queryValue[0].style.color ="green";
console.log(queryValue);

const liler= document.createElement("li");
const uller = document.createElement("ul");
liler.className = "listItem";
liler.id = "itemId";
liler.setAttribute("data","toggle");
liler.appendChild(document.createTextNode("Hello World"));
uller.appendChild(liler);
console.log(uller.children);
