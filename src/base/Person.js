class Person{
    constructor(name) {
        this.name = name;
    }
    constructor(name, surname, age, dateOfBirth, address, city, state, country, location) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.dateOfBirth = dateOfBirth;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.location = location;
    }
    get name() { return this.name; }
}
module.exports = Person;