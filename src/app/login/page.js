import React from 'react';

const Login = () => {
    
    return (
        <div className="hero min-h-screen bg-purple-100 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img src="https://i.ibb.co/CsMbLTf/fast-shopping-delivery.gif" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-purple-800 bg-green-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered input-success" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered input-success" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-warning">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;