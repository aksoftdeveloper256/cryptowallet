import React from 'react'

const Banner = () => {
  return (
    <div className="section hero-area my-5">
    <div className="container">
        <div className="row g-3 align-items-center">
            <div className="col-lg-6 order-lg-2">
                <img src="assets/images/hero.svg" alt="#" className="img-fluid" />
            </div>
            <div className="col-lg-6 order-lg-1">
                <div className="inner-content">
                    <div className="hero-text">
                        <h1>Profiltable Leading <br/>of <strong className="text-uppercase text-primary">Cryptocurrency</strong><br/> on the Market</h1>
                        <div className="lead">Get started with the easiest and most Secure palteform to buy,sell,trade and earn cryptocurrencies.</div>
                    </div>
                    <button type="button" className="btn btn-secondary text-uppercase my-4 py-2 fs-5 ">Start Trading</button>
                </div>
            </div>
        </div>
        <div className="row g-3 align-items-center mt-md-3 pt-md-3 mt-lg-5 pt-lg-5">
            <div className="col">
                <div className="d-flex align-items-center flex-nowrap">
                    <button type="button" className="play-btn"></button><span className="px-2 lead">How it's Work?</span>
                </div>
            </div>
            <div className="col-auto">
                <ul className="row row-cols-2 row-cols-md-2 row-cols-lg-4 list-unstyled">
                    <li className="col lead"><a href="/">Facebook</a></li>
                    <li className="col lead"><a href="/">Twitter</a></li>
                    <li className="col lead"><a href="/">Linkedin</a></li>
                    <li className="col lead"><a href="/">Instagram</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
  )
}

export default Banner