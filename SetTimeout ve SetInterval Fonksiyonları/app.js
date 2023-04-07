//console.log(this);

//Set Timeout = İşlemimizi belli bir saniyeden sonra başlatabiliyoruz.

setTimeout(function() {
    console.log("Naber")
},5000); //5 sn sonra işlem başlar

//Set Interval = verilen saniye aralıklarla fonksiyonu çalıştırır.

let i = 0
let value = setInterval(function() {
    i++
     console.log("Sayı:",i)
},1000);

document.getElementById("btn").addEventListener("click", function(){
    clearInterval(value);
})

//Clear Interval = Durdurmak için kullanılır.

