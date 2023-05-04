import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import img from '../../../public/images/profile.png'
import { AuthContext } from '../../provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .error(error => console.log(error))
    }

    return (
        <div className="navbar py-4 px-16 shadow top-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-600' : '')}> <li><a>Home</a></li> </NavLink>
                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-red-600' : '')}><li><a>Blog</a></li></NavLink>
                        <NavLink to='/register' className={({ isActive }) => (isActive ? 'text-red-600' : '')}><li><a>Register</a></li></NavLink>
                    </ul>
                </div>
                <NavLink to='/'><a className="btn btn-ghost normal-case text-xl">HungryExpress</a></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to='/' className={({ isActive }) => (isActive ? 'text-red-600' : '')}> <li><a>Home</a></li> </NavLink>
                    <NavLink to='/blog' className={({ isActive }) => (isActive ? 'text-red-600' : '')}><li><a>Blog</a></li></NavLink>
                    <NavLink to='/register' className={({ isActive }) => (isActive ? 'text-red-600' : '')}><li><a>Register</a></li></NavLink>
                </ul>
            </div>
            <div className="navbar-end gap-5">



                {user ?
                    <NavLink onClick={handleLogOut} className='btn btn-error bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'>Logout
                    </NavLink> :
                    <NavLink to='/login' className='btn btn-error bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'>  Login
                    </NavLink>
                }

                {
                    user && <NavLink><img className='rounded-full w-14' src={img} alt="" /></NavLink>
                }


            </div>
        </div>
    );
};

export default Header;