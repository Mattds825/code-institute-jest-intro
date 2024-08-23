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

### Adding the HTML file to check more than one element

If you want ot add the entire contents of an existing html file, 
and not have to keep up with changes you must do the following:

``` javascript
beforeEach(()=>{
    let fs = require("fs"); // Load the File System to execute our tests part of NodeJS
    let fileContents = fs.readFileSync("index.html", "utf-8"); // Load the contents of the file
    
    document.open(); // Open a new document
    document.write(fileContents); // Write the contents of the file
    document.close(); // Close the document

});
```