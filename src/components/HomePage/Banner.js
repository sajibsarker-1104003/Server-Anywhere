import React from "react";

const Banner = () => {
  return (
    <div>
      <section id="banner">
        <div className="row">
          <div
            className="col-lg-6"
            style={{
              backgroundColor: "#f2f2f7",
              borderRadius: "10px 0 0 10px",
              padding: "120px 75px",
            }}
          >
            <div
              className="banner_text section_head"
              style={{
                textAlign: "left",
                fontSize: "64px",
                letterSpacing: "-2px",
                lineHeight: "1.0625",
                margin: "0px",
              }}
            >
              <h1
                
              >
                Cut Your Cloud
                <strong style={{ fontWeight: "bolder" }}>
                  {" "}
                  <br /> Bills in Half
                </strong>
              </h1>
              <h2
                style={{
                  padding: "5px",
                  textAlign: "left",
                  fontFamily: "'Source Sans Pro',sans-serif",
                  fontSize: "24px",
                  letterSpacing: "-0.25px",
                  lineHeight: "1.3333333333",
                  marginTop: "0 px",
                }}
              >
                Deploy more with Linux virtual machines, global infrastructure,
                and simple pricing. No surprise bills, no lock-in, and the same
                price across every data center.
              </h2>
              <h3 style={{ textAlign: "left" }}>
                <span style={{ color: "#00b259" }}>
                  <strong>Rated #1 IaaS & Web</strong>
                </span>
                <span style={{ color: "#00b259" }}>
                  <strong> Hosting Provider</strong>
                </span>
              </h3>
            </div>
            <div className="banner_img" style={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start',}}>
              <img
                src="images/Year2022-v2.svg"
                width="135px"
                height="135px"
                alt="empty"
              />
              <img
                src="images/G2medal_leader_Spring22.svg"
                width="140px"
                height="140px"
                alt="empty"
              />
            </div>
          </div>
          <div
            className="col-lg-6"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "0 10px 10px 0",
              padding: "58px 75px 0",
            }}
          >
            <div className="banner_link text-center">
              <h5>
                Note: The use of an Adblocker can cause issues with promo code
                redemption.
              </h5>
              <div className="banner_button mx-auto">
                <h2>See if Linode works for you with $100 in credit</h2>
                <div
                  className="btn1"
                  style={{
                    backgroundColor: "#02b159",
                    color: "#fff",
                    height: "60px",
                    width: "275px",
                    display: "inline-block",
                    fontSize: "22px",
                    fontWeight: "600",
                    padding: "12px",
                    marginTop: "20px",
                  }}
                >
                  <i className="fa-brands fa-google"></i>
                  <a
                    href="#"
                    style={{
                      fontSize: "18px",
                      paddingLeft: "4px",
                      color: "#fff",
                    }}
                  >
                    Sign up with Google
                  </a>
                </div>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-5 px-0">
                      <hr />
                    </div>
                    <div className="col-lg-2 text-black-50">or</div>
                    <div className="col-lg-5 px-0">
                      <hr />
                    </div>
                  </div>
                </div>

                <div className="btn github mt-0">
                  <i className="fa-brands fa-github"></i>
                  <a href="#">GitHub</a>
                </div>
                <div className="btn github">
                  <i className="fa-solid fa-envelope"></i>
                  <a href="#">Email</a>
                </div>
                <div className="terms">
                  <p>
                    $100, 60-day free trial requires a valid payment method. By
                    providing your email address or using a single sign-on
                    provider to create a Linode account, you agree to the Linode
                    <a href="#">Terms of Service</a> and have reviewed our
                    <a href="#">Privacy Policy</a>and
                    <a href="#">Cookie Policy</a>.
                  </p>
                </div>
                <div className="money_back">
                  <img
                    src="images/linode-splash-predictable-pricing-more-competetive.svg"
                    width="40px"
                    height="40px"
                    alt="Empty"
                  />
                  <span>7-Day Money-Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Banner;
