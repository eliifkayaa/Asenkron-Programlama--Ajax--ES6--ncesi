class Request {
    //Get Request
    async get(url) {
        const response = await fetch(url); //Response Object

        const data = await response.json() //Json Object

        return data
    }

    //------------------------------------------------------------
    //POST Request
    async post(url, data) {
    
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }) // Response Object

        const data = await response.json()
        return data
    }
    //------------------------------------------------------------
    //PUT Request
    async put(url, data) {
     
        const response = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }) // Response Object

        const responsedata = await responsedata.json()

        return responsedata

    }
    //------------------------------------------------------------
    //Get Request
    async delete(url) {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'DELETE',
        }) //Response Object

        return "Veri silme işlemi başarılı"

    }
}

const request = new Request();
let albums;

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then( albums => {
//     console.log(albums)
// })
// .catch(err=> console.log(err))
//console.log(albums) //Asenkron

// request.post("https://jsonplaceholder.typicode.com/albums", {userId:1, title: "Elif Gökçe"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err=> console.log(err))

// request.put("https://jsonplaceholder.typicode.com/albums/1", {userId:10, title: "Elif"})
// .then(newAlbum => console.log(newAlbum))
// .catch(err=> console.log(err))

// request.delete("https://jsonplaceholder.typicode.com/albums/1")
//     .then(message => console.log(message))
//     .catch(err => console.log(err))