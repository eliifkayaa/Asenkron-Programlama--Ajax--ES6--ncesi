//Ajax, callback , http request

//1. yöntem = const temp = this
// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest() ;

//     }
//     //Get Request

//     get(url) {
//         this.xhr.open("GET", url) //Bağlantı açtık
//         const temp = this
//         temp.xhr.onload = function() {

//             //console.log(this)
//             if(temp.xhr.status === 200) {
//                 console.log(temp.xhr.responseText)
//             }
//         }

//         this.xhr.send() //isteği gönderdik
//     }
// }

// const request = new Request() 

// request.get("https://jsonplaceholder.typicode.com/albums");

//--------------------------------------------------

//2.yöntem = this.status aradaki xhr ı kaldırdık.

// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest() ;

//     }
//     //Get Request

//     get(url) {
//         this.xhr.open("GET", url) //Bağlantı açtık
        
//         this.xhr.onload = function() {

//             //console.log(this)
//             if(this.status === 200) {
//                 console.log(this.responseText)
//             }
//         }

//         this.xhr.send() //isteği gönderdik
//     }
// }

// const request = new Request() 

// request.get("https://jsonplaceholder.typicode.com/albums");


//--------------------------------------------------

//3. yöntem = bind(this)

// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest() ;

//     }
//     //Get Request

//     get(url) {
//         this.xhr.open("GET", url) //Bağlantı açtık
        
//         this.xhr.onload = function() {

//             //console.log(this)
//             if(this.xhr.status === 200) {
//                 console.log(this.xhr.responseText)
//             }
//         }.bind(this)

//         this.xhr.send() //isteği gönderdik
//     }
// }

// const request = new Request() 

// request.get("https://jsonplaceholder.typicode.com/albums");

//--------------------------------------------------

//4. yöntem = arrow function = this.xhr.onload = () => {

// class Request {
//     constructor() {
//         this.xhr = new XMLHttpRequest() ;

//     }
//     //Get Request

//     get(url) {
//         this.xhr.open("GET", url) //Bağlantı açtık
        
//         this.xhr.onload = () => {

//             //console.log(this)
//             if(this.xhr.status === 200) {
//                 console.log(this.xhr.responseText)
//             }
//         }

//         this.xhr.send() //isteği gönderdik
//     }
// }

// const request = new Request() 

// request.get("https://jsonplaceholder.typicode.com/albums");

//--------------------------------------------------
class Request {
    constructor() {
        this.xhr = new XMLHttpRequest() ;

    }
    //Get Request

    get(url, callback) {
        this.xhr.open("GET", url) //Bağlantı açtık
        
        this.xhr.onload = () => {

            //console.log(this)
            if(this.xhr.status === 200) {
                callback(null,this.xhr.responseText) //isteğimiz bitti
            } else {
                //Hata durumu
                callback("GET Request: bir hata oluştu", null);
            }
        }

        this.xhr.send() //isteği gönderdik
    }

    //POST Request
    post(url, data, callback) {
        this.xhr.open("POST", url) //Bağlantı açtık
        this.xhr.setRequestHeader("Content-type", "application/json") //JSON verisi göndereceğimizi söylüyoruz.
        
        this.xhr.onload = () => {
            if (this.xhr.status === 201) {
                //Başarılı
                callback(null, this.xhr.responseText)
            }
            else {
                //Hata durumu
                callback("Post Request: bir hata oluştu", null);
            }
        }

        this.xhr.send(JSON.stringify(data)) //veri göndereceğimiz için burası boş kalmamalı ve string olmalı.
    
    }

    //PUT Request
    put(url, data, callback) {
        this.xhr.open("PUT", url) //Bağlantı açtık
        this.xhr.setRequestHeader("Content-type", "application/json") //JSON verisi göndereceğimizi söylüyoruz.
        
        this.xhr.onload = () => {
            if (this.xhr.status === 200) {
                //Başarılı
                callback(null, this.xhr.responseText)
            }
            else {
                //Hata durumu
                callback("Put Request: bir hata oluştu", null);
            }
        }

        this.xhr.send(JSON.stringify(data)) //veri göndereceğimiz için burası boş kalmamalı ve string olmalı.
    
    }

        //Delete Request
        delete(url, callback) {
            this.xhr.open("DELETE", url) //Bağlantı açtık
            
            this.xhr.onload = () => {
    
                //console.log(this)
                if(this.xhr.status === 200) {
                    callback(null,"Veri silme işlemi başarılı") //isteğimiz bitti
                } else {
                    //Hata durumu
                    callback("DELETE Request: bir hata oluştu", null);
                }
            }
    
            this.xhr.send() //isteği gönderdik
        }
}
const request = new Request() 

// request.get("https://jsonplaceholder.typicode.com/albums", function(err,response){
// if (err=== null)  {
//     // başarılı
//     console.log(response)
// }
// else {
//     //Hata
//     console.log(err)
// }
// });

// request.post ("https://jsonplaceholder.typicode.com/albums", {userId:2, title:"Thriller"}, function(err,album){
//     if (err=== null)  {
//             // başarılı
//             console.log(album)
//         }
//         else {
//             //Hata
//             console.log(err)
//         }
// })


// request.put("https://jsonplaceholder.typicode.com/albums/10", {userId:143, title:"Elif"}, function(err,album){
//     if (err=== null)  {
//             // başarılı
//             console.log(album)
//         }
//         else {
//             //Hata
//             console.log(err)
//         }
// })

request.delete("https://jsonplaceholder.typicode.com/albums/10", function(err,response){
if (err=== null)  {
    // başarılı
    console.log(response)
}
else {
    //Hata
    console.log(err)
}
});
