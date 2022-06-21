class AD {
    constructor(id, Code, Name, PhoneNum, Email, Password, hashedPassword) {
        this.id = id
        this.Code = Code
        this.PhoneNum = PhoneNum
        this.Name = Name
        this.Email = Email
        this.Password = Password
        this.hashedPassword = hashedPassword
    }
}

module.exports = AD