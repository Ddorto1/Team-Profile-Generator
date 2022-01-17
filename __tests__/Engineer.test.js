const engtest= require('../lib/Engineer')

const engTest=new Engineer ("Bill", "bill@yahoo.com", 3, "Engineer")

test('checks if engineer name is present', ()=>{
    expect(engineerTest.name).toBe(expect.any(string))
    expect(engineerTest.name.length).toBeGreaterThan(2)})