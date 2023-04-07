//Etch api= Asenkron veri alma veri gönderme apidir.
//Ajax alternatifidir. Ajaxa göre daha kolaydır.
//fetch belirtilmediği sürece GET request atar

function getTextFile() { //Text dosyasından veri alma
    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}
//getTextFile();
function getJsonFile() { //Local bir Json dosyasından veri alma
    fetch ("example.json")
    .then(response => response.json())
    .then(data => console.log(rates))
    .catch(err => console.log(err))
}
//getJsonFile();

function getExternalAPI() {
    fetch ("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
}
getExternalAPI()

