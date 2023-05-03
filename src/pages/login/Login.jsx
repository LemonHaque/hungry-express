import React from 'react';

const Login = () => {
    return (
        <div>

            <div className='my-20'>

                <div className=' flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto rounded-lg shadow-xl p-8 px-8'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>Please Login</h2>
                        <div className='flex flex-col py-2'>
                            <label>Username</label>
                            <input className='rounded-lg border mt-2 p-2 focus:border-red-500 focus:outline-none' type="text" />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input className='p-2 rounded-lg border mt-2 focus:border-red-500 focus:outline-none' type="password" />
                        </div>
                        <div className='flex justify-between py-2'>
                            <p className='flex items-center'><input className='mr-2 bg-red-400' type="checkbox" /> Remember Me</p>
                            <p>Forgot Password</p>
                        </div>
                        <button className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'>Login</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;