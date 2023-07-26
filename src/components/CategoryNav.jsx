import Link from 'next/link';
import React from 'react';

const CategoryNav = () => {

  return (
    <>
      <div className=" container mx-auto flex justify-evenly sticky top-0 z-30 mb-3 block">
        <div className="dropdown block">
          <label tabIndex={0} className="btn btn-ghost bg-purple-500 text-white mt-2">
            <Link href=''>Category</Link>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow shadow-purple-400 bg-base-100 rounded-box w-52">
            <li><Link href=''>Men</Link></li>
            <li><Link href=''>Women</Link></li>
            <li><Link href=''>Baby</Link></li>
          </ul>
        </div>
      </div>
      {/* <div className="navbar-end hidden lg:flex z-30">
        <ul className="menu menu-horizontal px-1">
          <li tabIndex={0} className='bg-purple-500 text-white'>
            <details>
              <summary tabIndex={0}><Link href=''>Category</Link></summary>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow shadow-purple-400 bg-base-100 rounded-box w-52">
                <li><Link href=''>Men</Link></li>
                <li><Link href=''>Women</Link></li>
                <li><Link href=''>Baby</Link></li>
              </ul>
            </details>
          </li>
        </ul>
      </div> */}
    </>
  );
};

export default CategoryNav;