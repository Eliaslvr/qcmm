import React from 'react';

function Login() {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}> 
                <div className='Title'>Login</div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id="password" name="password"/>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Login;