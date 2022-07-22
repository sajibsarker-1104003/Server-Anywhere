import React from "react";

const Market = () => {
  return (
    <>
      <section id="market">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="section_head">
                <h2>11 Global Markets</h2>
                <h3>Same predictable price across every data center.</h3>
              </div>
              <div className="row text-center Oswald">
                <div className="col">
                  <div className="row my-3">
                    <div className="col-lg-4">LONDON</div>
                    <div className="col-lg-4">TOKYO</div>
                    <div className="col-lg-4">FREMONT</div>
                  </div>
                  <div className="row my-3">
                    <div className="col-lg-4">FRANKFURT</div>
                    <div className="col-lg-4">SINGAPORE</div>
                    <div className="col-lg-4">FREMONT</div>
                  </div>
                  <div className="row my-3">
                    <div className="col-lg-4">MUMBAI</div>
                    <div className="col-lg-4">SYDNEY</div>
                    <div className="col-lg-4">DALLAS</div>
                  </div>
                  <div className="row my-3">
                    <div className="col-lg-4">TORONTO</div>
                    <div className="col-lg-4">ATLANTA</div>
                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="map">
                <img
                  src="images/map-1@2x-1944x1106.png"
                  alt="error"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Market;
