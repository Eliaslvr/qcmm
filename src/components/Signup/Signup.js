import React, { useState } from 'react';
import "../../assets/style/signup.css"

function Signup() {

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Les mots de passe ne sont pas identique')
        }
    }

    return (
        <div className='bloc'>
            <form onSubmit={handleSubmit}> 
                <div className='title'>Signup</div>
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
    );
}

export default Signup;