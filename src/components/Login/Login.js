import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password) {
            setError("Veuillez remplir tous les champs !");
            return;
        }

        try {
            const response = await fetch('https://ch0rxlq1-3001.uks1.devtunnels.ms/api/users', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la récupération des utilisateurs');
            }

            const data = await response.json();
            console.log("Utilisateur récupéré:", data);

            // Vérification des identifiants
            if (data.users.email === email && data.users.password === password) {
                console.log("Connexion réussie !");
                navigate('/qcm');  // Redirection vers la page du QCM
            } else {
                setError("Email ou mot de passe incorrect !");
            }
        } catch (error) {
            setError(error.message);  // Correction ici pour éviter l'erreur d'affichage
        }
    };

    return (
        <div>
            <div className='bloc_login'>
                <form className='form_login' onSubmit={handleSubmit}> 
                    <div className='title'>Login</div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input 
                            type='email' 
                            id="email" 
                            name="email" 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input 
                            type='password' 
                            id="password" 
                            name="password" 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
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
