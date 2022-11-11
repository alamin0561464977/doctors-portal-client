import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const NavItem = <>
        <li><Link className='font-bold mx-1' to='/'>Home</Link></li>
        <li><Link className='font-bold mx-1' to='/about'>About</Link></li>
        <li><Link className='font-bold mx-1' to='/appointment'>Appointment</Link></li>
        <li><Link className='font-bold mx-1' to='/reviews'>Reviews</Link></li>
        <li><Link className='font-bold mx-1' to='/contact-us'>Contact Us</Link></li>
        <li><Link className='font-bold mx-1' to='/login'>Login</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start flex content-between">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {NavItem}
                    </ul>
                </div>
                <Link to='/' className=" text-primary font-bold normal-case text-2xl">Doctors Portal</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {NavItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;