import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md mx-4">
        <a className="navbar-brand pad" href="#">
          <img
            src="images/Linode-Logo-Black.svg"
            width="145px"
            height="45px"
            alt="error"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div
          className="collapse navbar-collapse menu_part"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto nav_pos">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page" href="#">
                Partners
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sales
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                {" "}
                Log In
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
