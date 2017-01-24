import React from 'react';
import Numerology from '../core/numerology';
import '../styles/numerology.css';

const NumerologyPage = () => {
  let n = new Numerology();
  let name = "Jaymarc De Castro";
  let destinyNumber = n.getDestinyNumber(name);

  console.log("destiny number: " + destinyNumber);

  return (
    <div className="numerology-page">
      <h1>Numerology</h1>
      <h3>Firstname</h3>
      <input type="text" name="firstname" />
      <h3>Lastname</h3>
      <input type="text" name="lastname" />
      <br />
      <button className="button-submit" type="submit">magic</button>
    </div>
  );
};

export default NumerologyPage;
