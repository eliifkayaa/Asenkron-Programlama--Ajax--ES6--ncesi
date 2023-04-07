// async function test(data) { //async anahtar kelimesi yeni bir promise döndüğünü ifade eder. data alır ve promise olarak döndürür.
//     // return data;
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             resolve ("Bu bir değerdir")
//         },5000)
//     })
//     let response = await promise //5 sn bekleyecek
//     //await sadece async fonksiyon içinde çalışır.

//     return response
//     // console.log(response)
//     // console.log("Naber")
// }
// test("Merhaba").then(response => console.log(response))

//-----------------------------------------------------------------------------------------

// async function testData(data) { //async anahtar kelimesi yeni bir promise döndüğünü ifade eder. data alır ve promise olarak döndürür.
//     // return data;
//     let promise = new Promise((resolve,reject) => {
//         setTimeout(()=> {
//             if (typeof data === "string") {
//                 resolve (data)
//             }
//             else {
//                 reject(new Error("Lütfen string bir değer girin"))
//             }
//         },5000)
//     })
//     const response = await promise //5 sn bekleyecek
//     //await sadece async fonksiyon içinde çalışır.

//     return response
//     // console.log(response)
//     // console.log("Naber")
// }
// testData(23)
// .then(data => console.log(data))
// .catch(err => console.log(err))

//-----------------------------------------------------------------------------------------
//Async -Fetch kullanımı

async function getCurrency(url) { //async anahtar kelimesi yeni bir promise döndüğünü ifade eder. data alır ve promise olarak döndürür.

        const response = await fetch(url) //Response Object
        console.log(response)
        const data = await response.json() //Json Object
  
       console.log(data)
}
     
getCurrency("https://api.exchangeratesapi.io/latest")
.then(ahmet => console.log(ahmet))  
    