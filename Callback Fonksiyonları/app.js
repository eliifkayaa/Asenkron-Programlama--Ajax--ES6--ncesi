//Callback Fonksiyonlar

const langs = ["Phyton", "Java" , "C++"] 

langs.forEach(function(lang) {
  //  console.log(lang)
})

document.getElementById("btn").addEventListener("click", function() {
   // console.log("Tıkla")
})

function process1() {
    setTimeout(function(){
        //console.log("Process 1")
    },3000) //asnkron durum vardır. önce process 2 sonra 1 çalışır.
}
function process2() {
    setTimeout(function(){
        //console.log("Process 2")
    },2000)
}
//Asenkron da birbirlerini beklemezler.
//process1()
//process2()
//console.log("Naber")

//Eğer beklemesini istersek o zaman callbak yazılır.

function process1(callbak) {
    setTimeout(function(){
        console.log("Process 1")
        callbak();
    },3000) }
    function process2() {
        setTimeout(function(){
            //console.log("Process 2")
        },2000) }

    //process1(process2)

    //--------------------------

    const lang = ["Phyton", "Java" , "C++"] 

    function addLang(lang, callback) {
        setTimeout(function() {
            lang.push(lang)
            console.log("Eklendi")
            callback();
        },2000)
    }

    function getAllLangs() {
        setTimeout(function() {
            lang.forEach(function(lang) {
                console.log(lang)
            })
        },1000)
    }

    addLang("Javascript", getAllLangs()); //Asenkron durum