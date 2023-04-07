class Request {
    //Get Request
    get(url) {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }

    //------------------------------------------------------------
    //POST Request
    post(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }
    //------------------------------------------------------------
    //PUT Request
    put(url, data) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })

    }
    //------------------------------------------------------------
    //Get Request
    delete(url) {
        return new Promise((resolve, reject) => {
            fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
            }).then(response => resolve("Veri silme işlemi başarılı"))
              .catch(err => reject(err))
        })

    }
}



const request = new Request();
let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then( albums => {
//     console.log(albums)
// })
// .catch(err=> console.log(err))
// console.log(albums) Asenkron

// request.post("https://jsonplaceholder.typicode.com/albums", {userId:1, title: "Elif Gökçe"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err=> console.log(err))

// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title: "Elif"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err=> console.log(err))

request.delete("https://jsonplaceholder.typicode.com/albums/1")
.then(message => console.log(message))
.catch(err=> console.log(err))