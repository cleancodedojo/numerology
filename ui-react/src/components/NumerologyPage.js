import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/numerology.css';

const NumerologyPage = () => {
  return (
    <div className="numerology-page container-fluid">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Numerology</h3>
        </div>
        <div className="panel-body">
          <div className="input-group col-lg-8">
            <span className="input-group-addon" id="handle">@</span>
            <input type="text" className="form-control" placeholder="handle" />
          </div>
          <div className="input-group col-lg-8">
            <label htmlFor="email-address">Email Address</label>
            <input type="text" className="form-control" id="email-address" placeholder="email@happiness.com" />
          </div>
          <div className="input-group col-lg-8">
            <label htmlFor="first-name">First Name</label>
            <input type="text" className="form-control" id="first-name" placeholder="first name given during birth"/>
          </div>
          <div className="input-group col-lg-8">
            <label htmlFor="middle-name">Middle Name</label>
            <input type="text" className="form-control" id="middle-name" />
          </div>
          <div className="input-group col-lg-8">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" className="form-control" id="last-name" placeholder="last name given during birth"/>
          </div>
          <div className="btn-group">
            <button type="button" className="btn btn-default">
              calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumerologyPage;