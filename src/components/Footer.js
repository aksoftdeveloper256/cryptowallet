import React from "react";

const Footer = () => {
  return (
    <div className="section footer color-bg-100 pb-0">
      <div className="container">
        <div className="row mb-5">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="d-flex align-items-center">
              <h4 className="mb-4 fw-bold ">
                <i className="fa fa-gg-circle fs-3 text-primary pe-2"></i>Cryptoon
              </h4>
            </div>
            <span className="lead">
              Pixelwibes is the world’s leading community for creatives to
              share, grow, and get hired.
            </span>
            <ul className="mt-3 fs-6 list-unstyled">
              <li>
                <span>Address:</span> 2071 Eva Pearl Street,LA
              </li>
              <li>
                <span>Email:</span> example@pw.com
              </li>
              <li>
                <span>Call:</span> 225-747-3640
              </li>
            </ul>
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-12">
                <h5 className="mb-4">For Community</h5>
                <ul className="footer-link px-3">
                  <li className="my-1">
                    <a href="/">Freewallet Peer Program</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Freewallet Affiliate Program</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Freewallet Alliance</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Community</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <h5 className="mb-4">Exchange</h5>
                <ul className="footer-link px-3">
                  <li className="my-1">
                    <a href="/">Exchange</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Wallet</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Explorer</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Learn</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Price</a>
                  </li>
                  <li>
                    <a href="/">Chart</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                <h5 className="mb-4">About Us</h5>
                <ul className="footer-link px-3">
                  <li className="my-1">
                    <a href="/">About Us</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Business Contact</a>
                  </li>
                  <li className="my-1">
                    <a href="/">Careers</a>
                  </li>
                  <li>
                    <a href="/">Reviews</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom pt-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <p>
                Designed and Developed by{" "}
                <a
                  href="http://www.pixelwibes.com/"
                  rel="nofollow"
                  className="text-primary"
                >
                  Illuminate Fintech Solutions FZCO
                </a>
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="list-unstyled d-flex justify-content-md-end">
                <li>
                  <a className="p-2 ms-2" href="/">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a className="p-2 ms-2" href="/">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
