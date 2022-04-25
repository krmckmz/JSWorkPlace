//event obje = addEventListener();
document.querySelector(".tikla").addEventListener("mouseover", clickFonksiyonu)

function clickFonksiyonu(v){
    const deger = v.target.id;
    v.preventDefault();
    console.log(deger);
}