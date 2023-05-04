import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from '../../provider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import app from '../../firebase/firebase.config';


const Login = () => {
    const [user, setUser] = useState()
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }


    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/"

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                const errorMessage = error.message;
                console.log(error);
            })
    }

    return (
        <div>

            <div className='my-20'>

                <div className=' flex flex-col justify-center'>
                    <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto rounded-lg shadow-xl p-8 px-8'>
                        <h2 className='text-4xl dark:text-white font-bold text-center'>Login to Your Account</h2>
                        <div className='flex flex-col py-2'>
                            <label>Email Address</label>
                            <input className='rounded-lg border mt-2 p-2 focus:border-red-500 focus:outline-none' type="text" name='email' required />
                        </div>
                        <div className='flex flex-col py-2'>
                            <label>Password</label>
                            <input className='p-2 rounded-lg border mt-2 focus:border-red-500 focus:outline-none' type="password" name='password' required />
                        </div>
                        <div className='flex justify-between py-2'>
                            <p className='flex items-center'><input className='mr-2 bg-red-400' type="checkbox" /> Remember Me</p>
                            <p>Forgot Password</p>
                        </div>
                        <button className='w-full my-5 py-2 bg-red-500 shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-lg'>Login</button>
                        <div className='text-center flex flex-col gap-3 mx-8 mb-2'>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-primary "><FaGoogle className='mr-2'></FaGoogle> Sign in with Google</button>
                            <button onClick={handleGithubLogin} className="btn btn-outline"><FaGithub className='mr-2'></FaGithub> Sign in with Github</button>

                        </div>
                        <p className='text-center'>Don't have an account? <Link className='text-blue-500' to='/register'>Register here</Link></p>

                        <p className='text-red-500'></p>
                        <p className='text-blue-500'></p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;