const { expect } = require('@jest/globals')
const { test } = require('jest-circus')
const emptest= require('../lib/Employee')
const employeeTest=new Employee ("Doug", "doug@yahoo.com", 3, "Employee")

test('checks if employee name is present', ()=>{
    expect(employeeTest.name).toBe(expect.any(string))
    expect(employeeTest.name.length).toBeGreaterThan(2)})