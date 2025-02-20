import { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

function Main() {
    const [selected, setSelected] = useState(""); 
    const [result, setResult] = useState(null);
    const [username, setUsername] = useState(""); 
    const [newUsername, setNewUsername] = useState(""); 
    const [showInput, setShowInput] = useState(false);
    const [message, setMessage] = useState("");

    const correctAnswer = "a";

    useEffect(() => {
        fetch(`https://ch0rxlq1-3001.uks1.devtunnels.ms/api/users`) 
            .then(response => response.json())
            .then(data => {
                setUsername(data.users.username);
                setNewUsername(data.users.username);
            })
            .catch(error => console.error("Erreur lors du fetch:", error));
    }, []);

    const updateUsername = () => {
        fetch(`https://ch0rxlq1-3001.uks1.devtunnels.ms/api/users/1`, { 
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username: newUsername }) 
        })
        .then(response => response.json())
        .then(data => {
            setUsername(newUsername);
            setShowInput(false); 
            setMessage("Nom mis à jour avec succès !");
            setTimeout(() => setMessage(""), 3000);
        })
        .catch(error => console.error("Erreur lors de la mise à jour:", error));
    };

    return (
        <div>
            <Navbar />
            <h1 className='name_main'>Bonjour {username}</h1>
            <div>
                {showInput ? (
                    <>
                        <input 
                            className='input_change' 
                            type="text" 
                            value={newUsername} 
                            onChange={(e) => setNewUsername(e.target.value)} 
                        />
                        <button className='button_change' onClick={updateUsername}>Valider</button>
                    </>
                ) : (
                    <p className='button_change' onClick={() => setShowInput(true)}>Modifier le Username</p>
                )}
                {message && <p className="success_message">{message}</p>}
            </div>

            <h2>QCM</h2>
            <form className='form_main' onSubmit={(e) => {
                e.preventDefault();
                setResult(selected === correctAnswer ? "Bonne réponse" : "Mauvaise réponse");
            }}>
                <div className='question'>
                    <p>Question</p>
                    <label className='label_main'>
                        <div className='response'>AAAA</div>
                        <input type='radio' name='qst1' value='a' checked={selected === "a"} onChange={() => setSelected('a')} />
                    </label><br/>
                    
                    <label className='label_main'>
                        <div className='response'>BBBB</div>
                        <input type='radio' name='qst1' value='b' checked={selected === "b"} onChange={() => setSelected('b')} />
                    </label><br/>
                    
                    <label className='label_main'>
                        <div className='response'>CCCC</div>
                        <input type='radio' name='qst1' value='c' checked={selected === "c"} onChange={() => setSelected("c")} />
                    </label>
                </div>
            </form>

            <button type='submit'>Valider</button> 
            {result && <p>{result}</p>}
        </div> 
    );
}

export default Main;
