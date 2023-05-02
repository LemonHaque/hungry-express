import React from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../public/images/profile.png'
const Header = () => {
    return (
        <div className="navbar py-4 px-16 shadow top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-600' : '')}> <li><a>Home</a></li> </NavLink>
                        <NavLink to='/recipes' className={({ isActive }) => (isActive ? 'text-red-600' : '')}> <li><a>Chef Recipes</a></li> </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-red-600' : '')}><li><a>Blog</a></li></NavLink>
                        <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-red-600' : '')}><li><a>About</a></li></NavLink>
                    </ul>
                </div>
                <NavLink to='/'><a className="btn btn-ghost normal-case text-xl">HungryExpress</a></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-600' : '')}> <li><a>Home</a></li> </NavLink>
                    <NavLink to='/recipes' className={({ isActive }) => (isActive ? 'text-red-600' : '')}> <li><a>Chef Recipes</a></li> </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-red-600' : '')}><li><a>Blog</a></li></NavLink>
                    <NavLink to='/about' className={({ isActive }) => (isActive ? 'text-red-600' : '')}><li><a>About</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <NavLink className='btn btn-error hover:bg-red-500'>Profile</NavLink>
                <NavLink><button className='btn btn-error hover:bg-red-500'>Login</button></NavLink>
                <img className='rounded-full w-14' src={img} alt="" />
            </div>
        </div>
    );
};

export default Header;