import React from 'react';

const Login = () => {
    return (
        <div>
            <form className='w-[500px] p-12 rounded-lg mx-auto mt-24 bg-slate-100 shadow-xl'>
                <h2 className='text-2xl font-bold mb-8 text-center text-primary'>Login</h2>
                <span className="label-text">Email</span>
                <input type="email" placeholder="email"
                    className="input input-bordered font-bold w-full rounded-lg my-3" />
                <span className="label-text">Password</span>
                <input type="password" placeholder="pa"
                    className="input input-bordered font-bold w-full rounded-lg my-3" />

            </form>
        </div>
    );
};

export default Login;