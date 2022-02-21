const Role = require('../lib/Role');

test('creates a role profile', () => {
    const role = new Role('Sales Associate', '50,000', 'Sales');

    expect(role.title).toBe('Sales Associate');
    expect(role.salary).toBe('50,000');
    expect(role.department_id).toBe('Sales');

});