const mgrtest= require('../lib/Manager')
const managerTest=new Intern ("Kim", "kim@yahoo.com", 3, "Manager")

test('checks if manager name is present', ()=>{
    expect(managerTest.name).toBe(expect.any(string))
    expect(managerTest.name.length).toBeGreaterThan(2)})