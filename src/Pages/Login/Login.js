import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../ContextAPI/UserContext';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [authError, setAuthError] = useState();
    const { login, googleLogin } = useContext(AuthContext);


    const handelLogin = data => {
        login(data.email, data.password)
            .then(({ user }) => {
                console.log(user);
                setAuthError(null);
            })
            .catch(err => {
                console.log(err);
                setAuthError(err.message);
            })
        reset();
    }
    return (
        <div className='w-[500px] p-8 rounded-lg mx-auto mt-12 bg-slate-100 shadow-xl'>
            <form onSubmit={handleSubmit(handelLogin)}>
                <h2 className='text-4xl font-bold mb-8 text-center text-primary'>Login</h2>
                {/* email */}
                <span className="label-text">Email</span>
                <input type="email" placeholder="email" {...register("email", { required: true })}
                    className="input input-bordered font-bold w-full rounded-lg my-3" />
                {errors.email?.type === 'required' && <p role="alert" className=' text-red-600'>Email is required</p>}

                <span className="label-text">Password</span>
                <input type="password" placeholder="password"  {...register("password", {
                    required: 'Password is required',
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/, message: 'password must be strong' },
                })}
                    className="input input-bordered font-bold w-full rounded-lg my-3" />
                {errors.password && <p role="alert" className=' text-red-600'>{errors.password.message}</p>}
                {
                    authError &&
                    <span className="label-text text-red-600 font-bold">{authError}</span>
                }
                <p>Forgot Forgot <span className=' text-red-300 font-bold'> Password </span> ?</p>
                <input type="submit"
                    className="input bg-slate-700 text-white input-border font-bold w-full rounded-lg my-3" />
            </form>
            <p className='text-lg'>New to Doctors Portal?
                <Link className='font-bold ml-2 text-green-600' to='/sign-up'>Create new account</Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={googleLogin} className="btn text-xl w-full rounded-lg btn-outline">Google Login</button>
        </div>
    );
};

export default Login;