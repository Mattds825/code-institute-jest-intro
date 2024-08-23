const addition = require("../calc");

describe("Calculator", ()=>{
    describe("Addition function", ()=>{
        test("should return 42 for 20 + 22", ()=>{
            expect(addition(20, 22)).toBe(42);
        });
        test("should return 30 for 20 + 10", ()=>{
            expect(addition(20, 10)).toBe(30);
        });
        test("should return NaA for 20 + 'hello'", ()=>{
            expect(addition(20, 'hello')).toBe(NaN);
        });
    });
    describe("Subtraction function", ()=>{
        
    });
    describe("Multiplication function", ()=>{
        
    });
    describe("Division function", ()=>{
        
    });
});
