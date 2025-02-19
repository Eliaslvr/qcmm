import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Navbar from '../Navbar/Navbar';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            alert("Veuillez remplir tous les champs !");
        } else {
            navigate('/qcm');
        }
    }

    return (
        <div>
        <div className='bloc_login'>
            <form className='form_login' onSubmit={handleSubmit}> 
                <div className='title'>Login</div>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id="email" name="email" onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id="password" name="password" onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <button type="submit">Envoyer</button>
            </form>
        </div>
        <Link className='button_login' to={'/signup'}>
            S'inscrire
        </Link>
        </div>
    );
}

export default Login;