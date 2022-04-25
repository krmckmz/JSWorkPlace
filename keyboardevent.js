//Klavye Olayları

const formElement = document.querySelector("form");
const searchInput = document.querySelector(".search");
const submitInput = document.querySelector(".submit");
const selectElement = document.querySelector("select");
const buttonElement = document.querySelector(".button-red");

selectElement.addEventListener("change",function(e){
    console.log(e.type +"İl değişti");
})

buttonElement.addEventListener("click", function(e){
    e.preventDefault();
    const renklerDizisi = new ["red","green","blue","black","white"];   
    const randomRenkler = Math.floor(Math.random() * renklerDizisi.length);
    document.body.style.backgroundColor=renklerDizisi[randomRenkler];
});
