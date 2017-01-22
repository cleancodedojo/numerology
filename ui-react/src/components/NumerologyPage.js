import React from 'react';
import '../styles/numerology.css';

const NumerologyPage = () => {
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
