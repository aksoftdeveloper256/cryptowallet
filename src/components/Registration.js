import React from 'react'
import { Link } from 'react-router-dom';

const Registration = () => {

const signupSubmitHandler = (event) => {
    event.preventDefault();
}

  return (
    <div className="body d-flex p-0 p-xl-5">
                <div className="container-xxl">
                    <div className="row g-3">
                        <div className="col-lg-12 d-flex justify-content-center align-items-center auth-h100">
                            <div className="d-flex flex-column">
                                <h1>Create Your Account</h1>
                                <span className="text-muted">Register with your email</span>
                               
                                <div className="tab-content mt-4 mb-3">
                                    <div className="tab-pane fade show active" id="Email">
                                        <div className="card">
                                            <div className="card-body p-4">
                                                <form onSubmit={signupSubmitHandler}>
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Email address</label>
                                                        <input type="email" className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Password</label>
                                                        <input type="password" className="form-control" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label className="form-label fs-6">Referral ID</label>
                                                        <input type="text" className="form-control" />
                                                    </div>
                                                    <button type="submit" className="btn btn-primary text-uppercase py-2 fs-5 w-100 mt-2">Create Account</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link to="/sign-in" title="#">Already registered? <span className="text-secondary text-decoration-underline">Log In</span></Link>
                            </div>
                        </div>

                        {/* <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center auth-h100">
                            <div className="qr-block text-center">
                                <img src="../assets/images/qr-code.png" alt="#" className="img-fluid my-4" />
                                <h4>Log in with QR code</h4>
                                <p>Scan this code with the <span className="text-primary">Cryptoon mobile app</span><br/> to log in instantly.</p>
                            </div>
                        </div> */}
                    </div>
                    
                </div>
            </div>
  )
}

export default Registration;