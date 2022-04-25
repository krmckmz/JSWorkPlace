//var , let , const 

//var name = "Kerem";

//console.log(name);

//alert(name);

//document.write(name);


const hobiler = {
    spor:"trekking",
    oyun:"playstation"
};

console.log(hobiler);
hobiler.spor="gym";

const diziler = ["kv","gibi"];
diziler.push("breaking bad");

//DATA TYPES
/* */
console.log(typeof hobiler);

let data =20.555465;
var numberValue = data.toFixed(2);
data = String(20);
var stringData= true.toString();
dataNumber = Number(data);

var dataParsed= parseInt(data); 

const name = "Kerem";
const sirname= "Çökmez";
const age = 24;
let sonuc;
const sentence = "Virüs \n vakaları sürekli artmakta."


console.log(sentence.toUpperCase());
sonuc = name.concat(age);
sonuc=name.charAt("r");
sonuc = name[3];
sonuc = name.slice(3,10);
sonuc = sentence.split("");

const isim ="Kerem";
const meslek ="yazılımcı";
const yas=24;

let htmlCode = "<nav><ul><li>Name:" + isim + "</li></ul></nav>";

//ES 6 ile gelen string format özelliği
htmlCode =`<nav><ul><li>isim:${isim}</li></ul></nav>`;
document.body.innerHTML =htmlCode;

//Nesne Oluşturma 

const nesne = {
    isim : "Kerem" , 
    Soyad :"Çökmez" , 
    Yaş : "24" ,
     hobilerim :["kitap" ,"film", "f1"], 
     ogrenim : {
         "ilkokul":"isfendiyor",
         "lise" :"ikhal", 
         "üniversite":"ytü"
        } 
    }

    let ilkokul = nesne.ogrenim["ilkokul"]
    console.log(nesne);

    const tarih = new Date();
    console.log(tarih.setFullYear(2022));

    const a = 5 ;
    const b = 7 ;
    console.log(a!=b);
    console.log(a===b); // denklik veri turune de bakiyor.

   const sayi = 50;
   console.log(sayi == 50 ? "true": "false");
   const renk = prompt("Renk Seçin ?");

   console.log(`Favori renginiz : ${renk}`);


   function WriteName(isim) {
       console.log(`isim:${isim}`)
   }

   const variable = () => {console.log("somethin...")}

   WriteName("Kerem");

   const isim = (isim = "Kerem") =>  console.log(`isim:${isim}`)
   isim("Kerem");

   (function(){})();

   const functions = {
       ekle : function(){
           console.log("ekleyeyazdım.")
       },
       
   };

   functions.ekle();

   for(let a= 0;a<10;a++)
   {
       if(a=3)
       {
           console.log("En sevdiğim sayı :" + a)
           continue;
       }

       console.log(a);
   }

   const hobiler = ["kitap","trekking","f1"];

   for(let i=0; i<hobiler.length; i++)
   {
       console.log(hobiler[i]);
   }

   hobiler.foreach(function (key,value,array){
      console.log(`${key}:${value}`);
   });

   for (let a in hobiler)
   {
       console.log(hobiler[a]);
   }

   var a = 0;
   let b = 1;
   const c = 2;
   console.log("Global Değiş")

  