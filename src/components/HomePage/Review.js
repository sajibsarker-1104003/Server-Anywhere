import React from "react";

const Review = () => {
  return (
    <>
      <section id="review">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="review_text section_head">
                <h2>Why Developers Love Linode</h2>
                <h3>
                  Best support, best price-performance, best API,
                  developer-owned, no gotchas, 99.99% SLA, multicloud friendly…
                </h3>
              </div>
              <div className="batch">
                <div className="row">
                  <div className="col-lg-3">
                    <img src="images/Leader_Leader.svg" alt="error" />
                  </div>
                  <div className="col-lg-3">
                    <img src="images/UsersMostLikely.svg" alt="error" />
                  </div>
                  <div className="col-lg-3">
                    <img src="images/EasiestToUse.svg" alt="error" />
                  </div>
                  <div className="col-lg-3">
                    <img src="images/BestSupport.svg" alt="error" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="images/slide-3a-Love.svg"
                alt="error"
                style={{ padding: "80px 0" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Review;
