// import logo from './logo.svg';
// import { useState, useSyncExternalStore } from 'react';
import './App.css';
import React from "react";

function App() {

  const CourseYouClick = () => {
    window.alert("Thanks for Visiting CourseYou😍!")
  }

  const HomeClick = () => {
    window.alert("Thanks for Visiting Home😎!")
  }

  const AboutClick = () => {
    window.alert("Thanks for Visiting About🤩!")
  }

  const ContactClick = () => {
    window.alert("Thanks for Visiting Contact🤗!")
  }

  const FreeClick = () => {
    window.alert("The Course is free! Happy Learning😊😊")
  }

  const PlusClick = () => {
    let Plus = window.confirm("Click OK to buy this Course😀?");
    console.log(Plus);
    if (Plus) {
      window.alert("Thanks for buying Course😊😊! Happy Learning!✌️")
    } else
      window.alert("No issue! Visit Again😊😊!")
  }

  const ProClick = () => {
    let Pro = window.confirm("Click OK to buy Pro version😀?");
    console.log(Pro);
    if (Pro) {
      window.alert("Thank You So Much for buying Course😊😊! Happy Learning!✌️")
    } else
      window.alert("No issue! Visit Again😊😊!")
  }

  return (
    <div>
      <div className="section-One">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a className="navbar-brand" href="#" onClick={CourseYouClick}>CourseYou</a>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#" onClick={HomeClick}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#" onClick={AboutClick}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="#" onClick={ContactClick}>Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className='section-Two'><section className="pricing py-5">
        <div className="container">
          <div className="row">
            {/* <!-- Free Tier --> */}
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Free</h5>
                  <h6 className="card-price text-center">$0<span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Single User</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>5GB Storage</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Unlimited
                      Private Projects</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Dedicated
                      Phone Support</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Free Subdomain
                    </li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                      Reports</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase" onClick={FreeClick}>Button</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Plus Tier --> */}
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Plus</h5>
                  <h6 className="card-price text-center">$9<span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>5 Users</strong></li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>50GB Storage</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Free Subdomain</li>
                    <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>Monthly Status
                      Reports</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase" onClick={PlusClick}>Button</a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Pro Tier --> */}
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">Pro</h5>
                  <h6 className="card-price text-center">$49<span className="period">/month</span></h6>
                  <hr />
                  <ul className="fa-ul">
                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited Users</strong>
                    </li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>150GB Storage</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Public Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Community Access</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Unlimited Private Projects</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Dedicated Phone Support</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span><strong>Unlimited</strong> Free
                      Subdomains</li>
                    <li><span className="fa-li"><i className="fas fa-check"></i></span>Monthly Status Reports</li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase" onClick={ProClick}>Button</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section></div>
      <div className='section-Three'>
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted" onClick={HomeClick}>Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted" onClick={AboutClick}>About</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-muted" onClick={ContactClick}>Contact</a></li>
          </ul>
          <p className="text-center text-muted">Darshan's Company © 2022, Inc</p>
        </footer>
      </div>
    </div>
  );
}


export default App;