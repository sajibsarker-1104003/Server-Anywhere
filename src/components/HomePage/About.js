import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row">
                <div className="col section_head text-center">
                  <h2>Get More For Less</h2>
                  <h3>
                    Enjoy flat, no lock-in pricing consistent across every data
                    center.
                  </h3>
                </div>
              </div>
              <div className="row pt-4">
                <div className="col-lg-1">
                  <img
                    src="images/linode-logo.svg"
                    alt="error"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="col-lg-11">
                  <div style={{ margin: "auto"}}>
                    <div
                      className="progress"
                      style={{
                        height: "2rem",
                        overflow: "hidden",
                        fontSize: "0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "0.25rem",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ maxWidth: "30%",backgroundColor:'rgb(2, 177, 89)'}}
                      >
                        <span className="title">$30 / mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-1">
                <div className="col-lg-1">
                  <img
                    src="images/aws-logo.svg"
                    alt="error"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="col-lg-11">
                  <div style={{ margin: "auto" }}>
                    <div
                      className="progress"
                      style={{
                        height: "2rem",
                        overflow: "hidden",
                        fontSize: "0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "0.25rem",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          maxWidth: "62.05%",
                          backgroundColor: "#d9dbe1",
                        }}
                      >
                        <span className="title">$62.05 / mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-1">
                <div className="col-lg-1">
                  <img
                    src="images/GCP_sm.png"
                    alt="error"
                    style={{ height: "40px", width: "40px" }}
                  />
                </div>
                <div className="col-lg-11">
                  <div style={{ margin: "auto" }}>
                    <div
                      className="progress"
                      style={{
                        height: "2rem",
                        overflow: "hidden",
                        fontSize: "0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "0.25rem",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          maxWidth: "63.38%",
                          backgroundColor: "#d9dbe1",
                        }}
                      >
                        <span className="title">$63.38 / mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row pt-1">
                <div className="col-lg-1">
                  <img
                    src="images/Azure_sm-e1570318178111.png"
                    alt="error"
                    style={{ height: "40px", width: "40p" }}
                  />
                </div>
                <div className="col-lg-11">
                  <div style={{ margin: "auto" }}>
                    <div
                      className="progress"
                      style={{
                        height: "2rem",
                        overflow: "hidden",
                        fontSize: "0.75rem",
                        backgroundColor: "#ffffff",
                        borderRadius: "0.25rem",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{
                          maxWidth: "71.47%",
                          backgroundColor: "#d9dbe1",
                        }}
                      >
                        <span className="title">$71.47 / mo</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center pt-4">
                <div className="col-lg-9">
                  <div className="fixed_text text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
                    repudiandae placeat alias, voluptatem optio id eos aliquam
                    non tenetur quaerat cupiditate et numquam minus doloremque
                    nisi quisquam velit natus dicta!
                  </div>
                </div>
              </div>

              <div className="text-center two_btn" style={{
	margin: '55px 0 100px',
}}>
                <div className="btn migration px-4" style={{backgroundColor:'rgb(2, 177, 89)',marginRight: '10px'}}>
                  <a href="#" >Learn about Free Migration to Linode</a>
                </div>
                <div className="btn" style={{backgroundColor:'rgb(2, 177, 89)'}}>
                  <a href="#">Learn about Linode Credits for Startups</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
