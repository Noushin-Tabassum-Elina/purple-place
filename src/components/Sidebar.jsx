import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <nav className="bg-purple-400 text-white h-screen p-10 ps-0 md:py-6 md:px-4 w-1/4 md:w-1/5 sticky top-0">
            <div className="text-sm md:text-xl font-bold mb-8">Categories</div>
            <div className="divider"></div> 
                <ul className='px-2 text-left'>
                   <h4 className='font-extrabold text-purple-900'> Color : <br /></h4>
                    <li className="mb-2"><Link href=''>Red</Link></li>
                    <li className="mb-2"><Link href=''>White</Link></li>
                    <li className="mb-2"><Link href=''>Black</Link></li>
                </ul>
                
                
        </nav>
    );
};

export default Sidebar;