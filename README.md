# Testing with Jest Lesson

## Describing Tests

### English


- I want to test a calculator
- I am going to test the addition function 
- I want the result of 42
- I expect 20 + 22 = 42

### Jest

``` javascript
describe("calaculator tests", ()=>{
    describe("addition tests", ()=>{
        test("should return 42", ()=>{
            expect(addition(20,22).toBe(42));
        });
    });
});
```