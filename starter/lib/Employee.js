// TODO: Write code to define and export the Employee class
class Employee {
    constructor (name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    } 
     // This line of code is to add item to employee class  
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getEmail(){
        return this.email
    }
    getRole(){
        return "Employee"
    }
}  
module.exports = Employee 