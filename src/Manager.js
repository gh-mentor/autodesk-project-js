// require the Employee class
const Employee = require('./Employee');

class Manager extends Employee {
  /**
   * Creates an instance of Manager.
   * @param {number} id - The ID of the manager.
   * @param {string} name - The name of the manager.
   * @param {number} salary - The salary of the manager.
   * @param {string} department - The department of the manager.
   * @throws Will throw an error if any argument is missing or if the department is not a string.
   */
  constructor(id, name, salary, department) {
    if (!id || !name || !salary || !department || typeof department !== 'string') {
      throw new Error('All arguments must be provided and department must be a string');
    }
    super(id, name, salary);
    this.department = department;
  }

  /**
   * Gets the details of the manager.
   * @returns {string} The details of the manager.
   */
  getDetails() {
    return `${super.getDetails()} and manages the ${this.department} department`;
  }

  /**
   * Sets the department of the manager.
   * @param {string} department - The new department of the manager.
   * @throws Will throw an error if the department is not a string.
   */
  setDepartment(department) {
    if (typeof department !== 'string') {
      throw new Error('Department must be a string');
    }
    this.department = department;
  }

    /**
   * Gets the department of the manager.
   * @returns {string} The department of the manager.
   */
    getDepartment() {
      return this.department;
    }
  
}

module.exports = Manager;
