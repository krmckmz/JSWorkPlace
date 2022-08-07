//Objects

let obj = {
    isim : "Kerem",
    yas:25,
    dogum: function(){return Date.now;}
};

delete obj.isim;

function boo() {
  this.isim = "kerem";
  this.yas = 25;
}

const boom = new boo();
console.log(boo.isim);

function hobilerim(dizi,spor){
    this.dizi = dizi;
    this.spor = spor;

} 

hobilerim.prototype.goster = function(){
  return `${this.dizi} ${this.spor}`;
}

const booms = new hobilerim("KV","Trekking");

console.log(booms.goster());

function yeniHobilerim(dizi,spor,kitap,sinema)
{
  hobilerim.call(this,dizi,spor);

  this.kitap = kitap;
  this.sinema = sinema;
}

