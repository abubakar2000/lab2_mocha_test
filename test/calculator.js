const assert = require('assert')
const chai = require("chai");
const { add, sub, mul, div } = require('../app');
const expect = chai.expect;
// All Test cases starting with 'M' are powered by MochaJS and 'C' are done with ChaiJS
// mocha
describe('Testing done with Mocha JS', function () {
    // describe('Addition', function () {
    it('add(5,2) expects result 7 PASS', function () {
        assert.equal(add(5, 2), 7);
    });
    it('add(5,2) expects result 8 FAILS', function () {
        assert.notEqual(add(5, 2), 8);
    });
    // });


    // describe('Subtraction', function () {
    it('sub(5,2) expects result 3 PASS', function () {
        assert.equal(sub(5, 2), 3);
    });
    it('sub(5,2) expects result 5 FAILS', function () {
        assert.notEqual(sub(5, 2), 5);
    });
    // });

    // describe('Multiplication', function () {
    it('mul(5,2) expects result 10 PASS', function () {
        assert.equal(mul(5, 2), 10);
    });
    it('mul(5,2) expects result 12 FAILS', function () {
        assert.notEqual(mul(5, 2), 12);
    });
    // });

    // describe('Division', function () {
    it('div(10,2) expects result 5 PASS', function () {
        assert.equal(div(10, 2), 5);
    });
    it('div(10,2) expects result 2 FAILS', function () {
        assert.notEqual(div(10, 2), 2);
    });
    // });

});

// chai
describe("Testing done with Chai JS ", function () {
    it("add(5,2) expects result 7 PASS", function () {
        expect(add(5, 2) === 7).to.be.true;
    });
    it("add(5,2) expects result 8 FAILS", function () {
        expect(add(5, 2) === 8).to.be.false;
    });

    it("sub(5,2) expects result 3 PASS", function () {
        expect(sub(5, 2) === 3).to.be.true;
    });
    it("sub(5,2) expects result 5 FAILS", function () {
        expect(sub(5, 2) === 5).to.be.false;
    });

    it("mul(5,2) expects result 10 PASS", function () {
        expect(mul(5, 2) === 10).to.be.true;
    });
    it("mul(5,2) expects result 12 FAILS", function () {
        expect(mul(5, 2) === 12).to.be.false;
    });

    it("div(10,2) expects result 5 PASS", function () {
        expect(div(10, 2) === 5).to.be.true;
    });
    it("div(10,2) expects result 2 FAILS", function () {
        expect(div(10, 2) === 2).to.be.false;
    });

});