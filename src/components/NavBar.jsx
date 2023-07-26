import Link from 'next/link';
import React from 'react';

const NavBar = () => {
    return (
        <div className="navbar bg-purple-100 container mx-auto sticky top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link className='font-bold text-purple-800' href='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='font-bold text-purple-800' href='/allProduct'>All Product</Link>
                        </li>
                        <li>
                            <Link className='font-bold text-purple-800' href='/reviews'>Reviews</Link>
                        </li>
                        <li>
                            <Link className='font-bold text-purple-800' href='/login'>Login</Link>
                        </li>
                    </ul>
                </div>

                <label className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://www.shutterstock.com/shutterstock/photos/230619400/display_1500/stock-vector-shop-icon-store-230619400.jpg" />
                    </div>
                </label>
                <a className="font-semibold italic text-purple-800 text-2xl normal-case text-xl">Purple Place</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className='font-bold text-purple-800' href='/'>Home</Link></li>
                    <li><Link className='font-bold text-purple-800' href='/allProduct'>All Product</Link></li>
                    <li><Link className='font-bold text-purple-800' href='/reviews'>Reviews</Link></li>
                    <li><Link className='font-bold text-purple-800' href='/login'>Login</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered input-error w-24 md:w-auto" />
                </div>
                <label className="btn btn-ghost avatar">
                    <div className="w-10 rounded-xl">
                        <img title='Your Cart' src="https://img.freepik.com/free-photo/shopping-cart-with-gift-box-icon-promotion-discount-sale-reward-checkout-ecommerce-online-shopping-3d-illustration_56104-2102.jpg" />
                    </div>
                </label>
                <label className="btn btn-ghost avatar">
                    <div className="w-10 rounded-xl">
                        <img title='wishlist' src="https://i.ibb.co/jvzcFgH/wishlist.png" />
                    </div>
                </label>
            </div>
        </div>
    );
};

export default NavBar;