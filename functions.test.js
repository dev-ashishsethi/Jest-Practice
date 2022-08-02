const functions=require("./functions.js")
test('should add two numbers', () => { 
    expect(functions.add(2,2)).toBe(4)
 })

 test('should be null',()=>{
    expect(functions.nullCheck()).toBeNull()
 })

 test('should be undefined', () => { 
    expect(functions.checkValue(0)).toBeFalsy()
  })
 test('should be user object', () => { 
    expect(functions.createUser()).toEqual({
      firstName: "ashish",
      lastName: "sethi",
    });
  })

  test('should be compared using regex',()=>{
    expect("ashish").toMatch(/a/)
  })
  
  test('should be able to check element in array',()=>{
    const arr=["ashish",123,false]
    expect(arr).toContain(123)
  })

//   test('should throw an error',()=>{
//     expect(exception()).toThrow();
//   })