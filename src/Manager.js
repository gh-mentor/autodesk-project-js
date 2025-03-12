// require the Employee class
const Employee = require('./Employee');


class Manager extends Employee {
    /*
    * TODO:
    * 1) Define a separate method to set the department of the manager.
    * This method should throw an error if the department is not a string.
    * 2) The constructor must check that all 4 arguments are provided and that the department is a string.
    */
    constructor(id, name, salary, department) {
        super(id, name, salary);
        this.department = department;
    }

    getDetails() {
        return `${super.getDetails()} and manages the ${this.department} department`;
    }

    // TODO: Implement a getDepartment method. It should return the department of the manager.
    

}

module.exports = Manager;