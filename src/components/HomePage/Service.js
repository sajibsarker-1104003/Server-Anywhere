import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "../Swiper/swiper";

const Service = () => {
  const [array, setArray] = useState([]);
  const repo = () => {
    axios.get("http://localhost:3003/cloudServices").then((res) => {
      console.log(res.data);
      const myArr = res.data;
      setArray(myArr);
    });

    console.log(setArray);
  };

  useEffect(() => repo(), []);
  return (
    <>
      <section id="service">
        <div className="container" style={{ paddingBottom: "30px" }}>
          <div className="row">
            <div className="section_head text-center">
              <h2>Simple. Affordable. Accessible.</h2>
            </div>
          </div>
          <div className="row"></div>
        </div>
        <div className="container text-center">
          <div class="row">
            <div class="col-sm-3">
              <h1>Core Cloud Services</h1>
              <p>
                Everything you need to build, launch, and scale your
                applications.
              </p>
            </div>
            
              <div class="col-sm-9">
               
                 <Slider />;
               
              </div>
            
          </div>
        </div>
        <div
          className="container text-center"
          style={{ paddingBottom: "30px" }}
        >
          <div class="row">
            <div class="col-sm-3">
              <h1>Business Ready</h1>
              <p>
                The network, reliability, and support to grow your business.
              </p>
            </div>
            <div class="col-sm-9">
              <Slider />
            </div>
          </div>
        </div>
        <div className="text-center" style={{ paddingBottom: "90px" }}>
          <p>
            Plus Free Services: DDoS Protection, VLANs, Cloud Firewall,
            Monitoring, Generous Transfer, 24/7 Support . . .
          </p>
        </div>
      </section>
    </>
  );
};
export default Service;
