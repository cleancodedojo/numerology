"use strict";

import {expect} from "chai";
import Numerology from "../src/numerology.js";

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
});
