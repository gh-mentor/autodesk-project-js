const Employee = require('./Employee');

/**
 * Class representing a Developer.
 * @extends Employee
 */
class Developer extends Employee {
  /**
   * Create a Developer.
   * @param {string} id - The ID of the developer.
   * @param {string} name - The name of the developer.
   * @param {number} salary - The salary of the developer.
   * @param {string} programmingLanguage - The programming language of the developer.
   */
  constructor(id, name, salary, programmingLanguage) {
    super(id, name, salary);
    this.programmingLanguage = programmingLanguage;
  }

  /**
   * Get the details of the developer.
   * @returns {string} The details of the developer.
   */
  getDetails() {
    return `${super.getDetails()} and codes in ${this.programmingLanguage}`;
  }
}

module.exports = Developer;
