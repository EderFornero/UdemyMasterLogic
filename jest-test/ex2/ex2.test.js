const palindromo = require('./ex2'); 

test("Comprobar la función palindromo", () => {
    expect(palindromo).toBeDefined();
});

test("Es un palindromo", () => { 
    expect(palindromo("otto")).toBe(true);
});

// test('No es un palindromo', () => { 
//     expect(palindromo("eder")).toEqual(false);
// })