import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>

            <div className='my-20'>

                <div className=' flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto rounded-lg shadow-xl p-8 px-8'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>Register Your Account</h2>
                        <div className='flex flex-col py-2'>
                            <label>Name</label>
                            <input className='rounded-lg border mt-2 p-2 focus:border-red-500 focus:outline-none' type="text" name='name' required />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Email Address</label>
                            <input className='rounded-lg border mt-2 p-2 focus:border-red-500 focus:outline-none' type="text" name='email' required />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input className='p-2 rounded-lg border mt-2 focus:border-red-500 focus:outline-none' type="password" name='password' required />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Photo URL</label>
                            <input className='rounded-lg border mt-2 p-2 focus:border-red-500 focus:outline-none' type="text" name='photo' required />
                        </div>
                        <div className='flex justify-between py-2'>
                            <p className='flex items-center'><input className='mr-2 bg-red-400' type="checkbox" name='accept' /> Accept Terms and Conditions</p>

                        </div>
                        <button className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'>Register</button>
                        <p className='text-center'>Already  have an account? <Link to='/login' className='text-blue-500' >Login here</Link></p>

                        <p className='text-red-500'></p>
                        <p className='text-blue-500'></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;