//Timeout

//SetTimeOut() --> Oluşturulan bir fonksiyonun belirlenen saniyeler içerisinde yürütülmesini sağlar.
// clearTimeout() -->

//SetInterval() --> Oluşturulan bir fonksiyonun belirlenen milisaniyeler içerisinde devamlı çalışmasını sağlar.
//clearInterval();

const setTimeoutSetting = setTimeout(PrintLoading,2000);
//2 saniye sonra yazar.

function PrintLoading(){
    console.log("loading...");
}

//clearTimeout(setTimeoutSetting);

const setIntervalSetting = setInterval(PrintLoading,2000);
//Her iki saniyede bir yazar.

//clearInterval(setIntervalSetting);