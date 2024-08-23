/**
 * @jest-environment jsdom
 */

const buttonClick = require('../button.js');

// runs before each test create mock DOM
beforeEach(() => {
    document.body.innerHTML = "<p id='par'></p>";
});

describe("DOM tests", () =>{
    test("expect p content to change", ()=>{
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });
});