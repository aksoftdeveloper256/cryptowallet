import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-xl py-lg-3 lp-menu">
      <div className="container py-2 rounded">
        <NavLink className="navbar-brand fw-bold  fs-3" to="/" title="Logo">
          <i className="fa fa-gg-circle fs-3 text-primary pe-2"></i>Cryptoon
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-expanded="false"
        >
          <span className="navbar-toggler-icon">
            <i className="fa fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item"><a className="nav-link me-2 page-scroll" href="#Market">Market</a></li>
                        <li className="nav-item"><a className="nav-link me-2 page-scroll" href="#Exchanges">Exchanges</a></li>
                        <li className="nav-item"><a className="nav-link me-2 page-scroll" href="#anywhere">Compatible</a></li>
                        <li className="nav-item"><a className="nav-link me-2 page-scroll" href="#get-touch">Get in Touch</a></li>
                        <li className="nav-item"><a className="nav-link me-2 page-scroll" href="#Contact">Contact</a></li> */}
          </ul>
          <form className="d-flex">
            <div className="dropdown Language d-none d-sm-block">
              <div className="dropdown">
                <div className="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-md-end p-0 m-0">
                  <div className="card border-0">
                    <ul className="list-unstyled py-2 px-1">
                      <li>
                        <img
                          src="../dist/assets/images/qr-code.png"
                          alt=""
                          className="img-fluid"
                        />
                        <span className="small text-muted px-2 mt-1">
                          Download Mobile App
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              to="/sign-in"
              title="login"
              className={(navData) =>
                navData.isActive ? " btn text-uppercase py-2 btn-primary rounded" : "btn text-uppercase py-2"}
            >
              Login
            </NavLink>
            <NavLink
              to="/sign-up"
              title="Register"
              className={(navData) =>
                navData.isActive ? " btn text-uppercase py-2 btn-primary rounded" : "btn text-uppercase py-2"}
            >
              Register
            </NavLink>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
