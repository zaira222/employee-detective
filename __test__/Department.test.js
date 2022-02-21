const Department = require('../lib/Department');

test('creates a department profile', () => {
    const department = new Department('Engineer');

    expect(department.Name).toBe('Engineer');
});