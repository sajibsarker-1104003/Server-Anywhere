import React from "react";

const Footer=()=>{
  return(
    <>
    <footer className="footer">
			<div className="row mx-0">
				<div className="col-lg-8 ps-5">
					<footer className="footer_text">
						&copy;2003-2022 Linode LLC. All rights reserved. Any trademarked
						names and logos are property of their respective companies.
					</footer>
				</div>
				<div className="col-lg-4 text-end policy pe-5 footer_text">
					<a href="#">Terms of Service</a>
					<a href="#">Privacy Policy</a>
					<a href="#">Cookie Policy</a>
				</div>
			</div>
		</footer>
    </>
    );
}
export default Footer;