import { updateProfile } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../ContextAPI/UserContext';
import { auth } from '../../firebase/firebaseConfig';

const SignUp = () => {
    const [error, setError] = useState(null);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { signUp, googleLogin } = useContext(AuthContext);

    const handelSignUp = data => {
        console.log(data);
        signUp(data.email, data.password)
            .then(({ user }) => {
                setError(null);
                updateProfile(auth.currentUser, {
                    displayName: `${data.name}`, photoURL: `${data.photoURL}`
                }).then(() => {
                    console.log(user);
                }).catch((err) => {
                    console.log(err);
                    setError(err);
                });
            })
            .catch(err => {
                console.log(err);
                setError(err.message);
            })
        reset();
    }
    return (
        <div className='w-[500px] p-8 rounded-lg mx-auto mt-12 bg-slate-100 shadow-xl'>
            <form onSubmit={handleSubmit(handelSignUp)}>
                <h2 className='text-4xl font-bold mb-8 text-center text-primary'>Sign Up</h2>
                {/* name */}
                <span className="label-text">Name</span>
                <input type="text" placeholder="Name" {...register("name", { required: true })}
                    className="input input-bordered font-bold w-full rounded-lg my-3" />
                {errors.name?.type === 'required' && <p role="alert" className=' text-red-600'>Name is required</p>}

                {/* photo */}
                <span className="label-text">User Photo URL</span>
                <input type="url" placeholder="User Photo URL" {...register("photoURL", { required: true })}
                    className="input input-bordered font-bold w-full rounded-lg my-3" />
                {errors.photoURL?.type === 'required' && <p role="alert" className=' text-red-600'>User Photo URL is required</p>}

                {/* email */}
                <span className="label-text">Email</span>
                <input type="email" placeholder="email" {...register("email", { required: true })}
                    className="input input-bordered font-bold w-full rounded-lg my-3" />
                {errors.email?.type === 'required' && <p role="alert" className=' text-red-600'>Email is required</p>}

                {/* password */}
                <span className="label-text">Password</span>
                <input type="password" placeholder="password"  {...register("password", {
                    required: 'Password is required',
                    pattern: { value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8}/, message: 'password must be strong' },
                })}
                    className="input input-bordered font-bold w-full rounded-lg my-3" />
                {errors.password && <p role="alert" className=' text-red-600'>{errors.password.message}</p>}
                {
                    error &&
                    <span className="label-text text-red-600 font-bold">{error}</span>
                }

                {/* submit */}
                <input type="submit"
                    className="input bg-slate-700 text-white input-border font-bold w-full rounded-lg my-3" />
            </form>
            <p className='text-lg'>already have an account?
                <Link className='font-bold ml-2 text-green-600' to='/login'>Login</Link>
            </p>
            <div className="divider">OR</div>
            <button onClick={googleLogin} className="btn text-xl w-full rounded-lg btn-outline">Google Login</button>
        </div>
    );
};

export default SignUp;