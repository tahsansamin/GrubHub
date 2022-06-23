import React from "react";
import { Card, Navbar } from "react-bootstrap";

export default function Contactcard() {
  return (
    <section className="head pb-5">
      <div className="container py-5">
        <div className="card">
          <div className="card-body">
            <h1 className="font-weight-light text-center py-3">Contact Us</h1>
            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2"></div>
                  <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                    <h3>Find us at</h3>
                    <p>
                      Kampala Uganda<br></br>
                      Kensington<br></br>
                      123 Kampala
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-1 offset-1 col-md-2 col-sm-2 col-2"></div>
                  <div className="col-lg-10 col-md-9 col-sm-9 col-9">
                    <h3>Ring us at</h3>
                    <p>
                      Tahsan <br></br>
                      +1234567<br></br>
                      Mon-Fri 9:00AM-6:00PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="https://i.pinimg.com/564x/a4/32/62/a43262079755a01f6f91c05ad2eba5ab.jpg" alt="picture of grubhub restaurant" width="400px" height="400px"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
