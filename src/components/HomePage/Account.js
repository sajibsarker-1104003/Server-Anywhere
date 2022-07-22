import React from "react";

const Account = () => {
  return (
    <>
      <section id="account">
        <div className="row">
          <div className="col-lg-6 account_img">
            <img src="images/right face.png" alt="error" />
          </div>
          <div className="col-lg-6 account_text text-center">
            <div className="section_head">
              <h2>Ready to get started?</h2>
            </div>
            <div className="btn">
              <a href="#">Create Free Account</a>
            </div>
            <p>$100 credit will be applied to your new account</p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Account;
