import React from "react";

const Account = () => {
  return (
    <>
      <section id="account">
        <div className="container px-0">
          <div className="row">
            <div className="col-lg-6 account_img px-0">
              <img src="images/right face.png" alt="error" />
            </div>
            <div className="col-lg-6 px-0 account_text text-center">
              <div className="holder"></div>
              <div className="section_head">
                <h2>Ready to get started?</h2>
              </div>
              <div
                className="btn"
                style={{
                  backgroundColor: "#02b159",
                  color: "#fff",
                  display: "inline-block",
                  fontSize: "18px",
                  fontWeight: "600",
                  lineHeight: "32px",
                  padding: "12px 43px",
                  marginTop: "20px",
                }}
              >
                <a href="#">Create Free Account</a>
              </div>
              <p>$100 credit will be applied to your new account</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Account;
