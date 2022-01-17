const inttest= require('../lib/Intern')

const intTest=new Intern ("Julie", "julie@yahoo.com", 3, "Intern")

test('checks if intern name is present', ()=>{
    expect(internTest.name).toBe(expect.any(string))
    expect(internTest.name.length).toBeGreaterThan(2)})