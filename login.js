//Local Storage

//localStorage.setItem("isim","Kerem");
const input = document.querySelector(".input_1");
const submitButton = document.querySelector(".submit");

submitButton.addEventListener("click",function(e){
    const inputValue = input.value;
   let oturumDizisi;
   if(localStorage.getItem("oturum")==null){
       oturumDizisi==[];
   }else{
       oturumDizisi = JSON.parse(localStorage.getItem("oturum"));
   }
   
   oturumDizisi.push(inputValue);

   localStorage.setItem("oturum",JSON.stringify(oturumDizisi));

    e.preventDefault();
})

const yeniOturum =JSON.parse(localStorage.getItem("oturum"));
yeniOturum.array.forEach(element => {
    console.log(element);
});
console.log(yeniOturum);

