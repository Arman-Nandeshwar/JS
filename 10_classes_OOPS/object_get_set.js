//object based getters and setters(old(rarely seen))

const User = {
    _email : 'h@hc.com',
    _password  : "abc",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
