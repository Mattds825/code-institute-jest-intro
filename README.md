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



### Using Mock DOM 

Create a DOM that can be used to run the test on 

``` javascript
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});
```

Test a function to se changes on Mock DOM 

``` javascript
describe("DOM tests", () =>{
    test("expect p content to change", ()=>{
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});
```