// function getData(data) { //Promise objesi döndüren fonksiyon
//     return new Promise (function(resolve, reject){
//         setTimeout(function(){
//             resolve("Olumlu sonuç")
//         },10000)
//     })
// }
//-----------------------------------------------------------------
// function getData(data) { //Promise objesi döndüren fonksiyon
//     return new Promise (function(resolve, reject){
//         setTimeout(function(){
//             reject("Olumsuz sonuç")
//         },5000)
//     })
// }
//-----------------------------------------------------------------
// console.log(getData("Merhaba")) //Biz

// function getData(data) { //Promise objesi döndüren fonksiyon
//     return new Promise (function(resolve, reject){
//         setTimeout(function(){
//             reject("Olumsuz sonuç")
//         },5000)
//     })
// }
//-----------------------------------------------------------------
// getData("Merhaba").then(function(response){
//     console.log(response)
// })

// getData("Merhaba").catch(function(err){
//     console.log(err)
// })
//-----------------------------------------------------------------
// function getData(data) { //Promise objesi döndüren fonksiyon
//         return new Promise (function(resolve, reject){
//             setTimeout(function(){
//             if (typeof data === "string") {
//                 //Olumlu
//                 resolve(data)
//             }
//             else {
//                 //Olumsuz
//                 reject(new Error("Lütfen string bir değer girin"))
//             }


//             },5000)
//         })
//     }
//     getData("Merhaba").then(response =>
//             console.log("Gelen Değer= " + response))
//     .catch(err =>
//         console.error(err)
//     )
//-----------------------------------------------------------------

function addTwo(number) { //Promise objesi döndüren fonksiyon
    return new Promise ((resolve, reject) =>{
        setTimeout(function(){
        if (typeof number === "number") {
            //Olumlu
            resolve(number + 2)
        }
        else {
            //Olumsuz
            reject(new Error("Lütfen number bir değer girin"))
        }

        },3000)
    });
}
addTwo(10).then(response => {console.log(response);
return response + 2;
}).then(response2 => console.log(response2))
.catch(err => console.error(err)) 
//Promise Chain - 1 tane catch - birden çok then 
