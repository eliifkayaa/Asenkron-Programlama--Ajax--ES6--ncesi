const person = {
    age : 25,

    // tellAge : function() {
    //     console.log (this)
    //     console.log (this.age) //bu this buarada ki personı gösterir.
    //     //objemizin fonksiyonu olduğu için.
    // }.bind(this) //bind this bağlamını değiştirmek için kullanılır.

    tellAge: () => { //Arrow function
        //arrow function da bind yapmadan aynı sonucu alıyoruz.
        //aralarında bu şekilde bir fark vardır.
        console.log (this)
        console.log (this.age)
    }

    //this = window objemizi gösterir.
}

person.tellAge()

