const Manager = require('../src/Manager');

/*
Test case 1:
Create a Manager object with the ID 1, name 'Jane Doe', salary 70000, and department 'Engineering'. Verify that the manager has been created successfully.
*/
test('Manager constructor works', () => {
    const manager = new Manager(1, 'Jane Doe', 70000, 'Engineering');
    expect(manager.getId()).toBe(1);
    expect(manager.getName()).toBe('Jane Doe');
    expect(manager.getSalary()).toBe(70000);
    expect(manager.getDepartment()).toBe('Engineering');
});

/*
Test case 2:
Attempt to create a Manager object without providing the department. Verify that an error is thrown.
*/
test('Manager constructor throws error when department is missing', () => {
    expect(() => new Manager(1, 'Jane Doe', 70000)).toThrow('All arguments must be provided and department must be a string');
});

/*
Test case 3:
Attempt to create a Manager object with a non-string department. Verify that an error is thrown.
*/
test('Manager constructor throws error when department is not a string', () => {
    expect(() => new Manager(1, 'Jane Doe', 70000, 123)).toThrow('All arguments must be provided and department must be a string');
});

/*
Test case 4:
Attempt to create a Manager object without providing the name. Verify that an error is thrown.
*/
test('Manager constructor throws error when name is missing', () => {
    expect(() => new Manager(1, undefined, 70000, 'Engineering')).toThrow('All arguments must be provided and department must be a string');
});

/*
Test case 5:
Attempt to create a Manager object without providing the salary. Verify that an error is thrown.
*/
test('Manager constructor throws error when salary is missing', () => {
    expect(() => new Manager(1, 'Jane Doe', undefined, 'Engineering')).toThrow('All arguments must be provided and department must be a string');
});

/*
Test case 6:
Attempt to create a Manager object without providing the ID. Verify that an error is thrown.
*/
test('Manager constructor throws error when ID is missing', () => {
    expect(() => new Manager(undefined, 'Jane Doe', 70000, 'Engineering')).toThrow('All arguments must be provided and department must be a string');
});