const { TestWatcher } = require('jest');
const Employee = require('../lib/Employee');

test('creates an employee profile', () => {
    const employee = new Employee('Jade', 'Smith', 'Sales', 'Linda');

    expect(employee.first_name).toBe('Jade');
    expect(employee.last_name).toBe('Smith');
    expect(employee.role).toBe('Sales');
    expect(employee.manager).toBe('Linda');
});