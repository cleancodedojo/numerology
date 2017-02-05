"use strict";

import {expect} from "chai";
import Numerology from "../source/numerology.js";

describe("Numerology", () => {
  it("shall exist", () => {
    let n = new Numerology();

    expect(n).to.be.defined;
  });

  it("shall have the ability to convert letters into numbers:", () => {
    let n = new Numerology();

    describe("when letters = a, j, s", () => {
      it("shall return 1", () => {
        expect(1).to.equal(n.getNumber("a"));
        expect(1).to.equal(n.getNumber("j"));
        expect(1).to.equal(n.getNumber("s"));
      });
    });

    describe("when letters = b, k, t", () => {
      it("shall return 2", () => {
        expect(2).to.equal(n.getNumber("b"));
        expect(2).to.equal(n.getNumber("k"));
        expect(2).to.equal(n.getNumber("t"));
      });
    });

    describe("when letters = c, l, u", () => {
      it("shall return 3", () => {
        expect(3).to.equal(n.getNumber("c"));
        expect(3).to.equal(n.getNumber("l"));
        expect(3).to.equal(n.getNumber("u"));
      });
    });

    describe("when letters = d, m, v", () => {
      it("shall return 4", () => {
        expect(4).to.equal(n.getNumber("d"));
        expect(4).to.equal(n.getNumber("m"));
        expect(4).to.equal(n.getNumber("v"));
      });
    });

    describe("when letters = e, n, w", () => {
      it("shall return 5", () => {
        expect(5).to.equal(n.getNumber("e"));
        expect(5).to.equal(n.getNumber("n"));
        expect(5).to.equal(n.getNumber("w"));
      });
    });

    describe("when letters = f, o, x", () => {
      it("shall return 6", () => {
        expect(6).to.equal(n.getNumber("f"));
        expect(6).to.equal(n.getNumber("o"));
        expect(6).to.equal(n.getNumber("x"));
      });
    });

    describe("when letters = g, p, y", () => {
      it("shall return 7", () => {
        expect(7).to.equal(n.getNumber("g"));
        expect(7).to.equal(n.getNumber("p"));
        expect(7).to.equal(n.getNumber("y"));
      });
    });

    describe("when letters = h, q, z", () => {
      it("shall return 8", () => {
        expect(8).to.equal(n.getNumber("h"));
        expect(8).to.equal(n.getNumber("q"));
        expect(8).to.equal(n.getNumber("z"));
      });
    });

    describe("when letters = i, r", () => {
      it("shall return 9", () => {
        expect(9).to.equal(n.getNumber("i"));
        expect(9).to.equal(n.getNumber("r"));
      });
    });

    describe("when letters = ' ' (space/non-alphabet)", () => {
      it("shall return 0", () => {
        expect(0).to.equal(n.getNumber(" "));
      });
    });
  });

  it("shall have the ability to convert a name into an array of numbers", () => {
    let name = "Freda Mary Norton";
    let expectedOutput = [
      6, 9, 5, 4, 1, 0,
      4, 1, 9, 7, 0,
      5, 6, 9, 2, 6, 5
    ];

    let n = new Numerology();

    expect(n.getNumberArray(name)).to.deep.equal(expectedOutput);
  });

  it("shall have ability to get the destiny number of 9 for John Henry Jones", () => {
    let name = "John Henry Jones";
    let expectedDestinyNumber = 9;

    let n = new Numerology();

    expect(n.getDestinyNumber(name)).to.equal(expectedDestinyNumber);
  });

  it("shall have ability to get the destiny number of 4 for Ray Joseph de Castro", () => {
    let name = "Ray Joseph de Castro";
    let expectedDestinyNumber = 4;

    let n = new Numerology();

    expect(n.getDestinyNumber(name)).to.equal(expectedDestinyNumber);
  });

  it("shall have the abilit to get the birth force number", () => {
    let dateOfBirth = "1950.12.18";
    let expectedBirthForceNumber = 9;
    let n = new Numerology();
    
    expect(n.getBirthForceNumber(dateOfBirth)).to.equal(expectedBirthForceNumber);
  });
});
