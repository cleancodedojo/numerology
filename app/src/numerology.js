class Numerology {
  getNumber(letter) {
    switch(letter.toLowerCase()) {
      case "a":
      case "j":
      case "s": return 1;
      case "b":
      case "k":
      case "t": return 2;
      case "c":
      case "l":
      case "u": return 3;
      case "d":
      case "m":
      case "v": return 4;
      case "e":
      case "n":
      case "w": return 5;
      case "f":
      case "o":
      case "x": return 6;
      case "g":
      case "p":
      case "y": return 7;
      case "h":
      case "q":
      case "z": return 8;
      case "i":
      case "r": return 9;
      default: return 0;
    }
  }
}

export default Numerology;
