/**
 * @jest-environment jsdom
 */

const buttonClick = require('../button.js');

// runs before each test create mock DOM
/*
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});
*/

beforeEach(()=>{
    let fs = require("fs"); // Load the File System to execute our tests part of NodeJS
    let fileContents = fs.readFileSync("index.html", "utf-8"); // Load the contents of the file
    
    document.open(); // Open a new document
    document.write(fileContents); // Write the contents of the file
    document.close(); // Close the document

});

describe("DOM tests", () =>{
    test("expect p content to change", ()=>{
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
    test("h1 should exist", ()=>{
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});