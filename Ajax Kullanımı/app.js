//Http Status
//200 : OK
//403 : Forbidden
//404 : Not Found
//505 : Internal Server Error

//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

document.getElementById ("btn").addEventListener("click", function(){

    //XMLHttpRequest = w3 schooldan bakılabilir.
    //https://javascript.info/xmlhttprequest

    const xhr = new XMLHttpRequest();

    // xhr.onprogress = function() {
    //     console.log("Process işleniyor", this.readyState)
    // }
    xhr.onload = function() {
        //console.log(this.readyState);
        if(this.status == 200) {
            //console.log (this.responseText)
            document.getElementById("ajax").textContent = this.responseText;
        }
    }

//Eski Yöntem
    // xhr.onreadystatechange = function() {
    //    // console.log(this.readyState)
    //    // console.log(this.status)

    //    if(this.status == 200 && this.readyState == 4) {
    //     //Response Hazır 
    //     console.log(this.responseText)
    //    }

    // }
//Eski Yöntem

    xhr.open("GET", "example.txt", true);

    xhr.send() //request gönderme


})