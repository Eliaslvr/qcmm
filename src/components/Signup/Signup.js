import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Les mots de passe ne sont pas identique')
        } else {
            navigate('/qcm')
        }
    }

    return (
        <div>
        <div className='bloc'>
            <form className='form_signup' onSubmit={handleSubmit}> 
                <div className='title'>Signup</div>
                <div className='name'>
                    <label htmlFor='name'>Name</label>
                    <input type='name' id="name" name="name" placeholder='Your name' required/>
                </div>
                <div className='email'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id="email" name="email" required/>
                </div>

                <div className='password'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                </div>

                <div className='confirmPassword'>
                    <label htmlFor='confirmPassword'>Confirmed Password</label>
                    <input type='password' id="confirmPassword" name="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div>
                <button type="submit">Envoyer</button>
            </form>
            </div>
            <Link className='button_login' to={'/login'}>
                Se connecter
            </Link>
        </div>
    );
}

export default Signup;