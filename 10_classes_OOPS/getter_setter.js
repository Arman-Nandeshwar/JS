//new syntax

class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    //getters and setters have the same name as the property
    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const arman =  new User("arman@gamil.com" , "abc")
console.log(arman.email);
