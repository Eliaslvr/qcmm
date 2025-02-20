import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        if (password !== confirmPassword) {
            setError('Les mots de passe ne sont pas identiques');
            return;
        }
        console.log(JSON.stringify({ username, email, password }));

        try {
            const response = await fetch('https://ch0rxlq1-3001.uks1.devtunnels.ms/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            
            console.log(response);
            
            if (!response.ok) {
                throw new Error('Erreur lors de l’inscription');
            }

            const data = await response.json();
            console.log('Réponse du serveur:', data);
            navigate('/qcm');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <div className='bloc'>
                <form className='form_signup' onSubmit={handleSubmit}> 
                    <div className='title'>Signup</div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div className='name'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Your username' required/>
                    </div>
                    <div className='email'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
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
