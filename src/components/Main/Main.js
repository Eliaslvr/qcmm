import { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar'

function Main() {

    const [selected, setSelected] = useState(""); 
    const [result, setResult] = useState(null);
    const [username, setUsername] = useState(""); 
    const [newUsername, setNewUsername] = useState(""); 

    const correctAnswer = "a";

    useEffect(() => {
        fetch(`https://ch0rxlq1-3001.uks1.devtunnels.ms/api/users`) 
            .then(response => response.json())
            .then(data => {
                setUsername(data.users.username);
                console.log(data.users.username);
                
                // setNewUsername(data.users.username);
            })
                
            .catch(error => console.error("Erreur lors du fetch:", error));
    }, []);

    // const updateUsername = () => {
    //     fetch(`https://ch0rxlq1-3001.uks1.devtunnels.ms/api/users/1`, { 
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ username: newUsername }) 
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log("Username mis à jour:", data);
    //         setUsername(newUsername);
    //     })
    //     .catch(error => console.error("Erreur lors de la mise à jour:", error));
    // };

    // const handleUsernameChange = (e) => {
    //     setNewUsername(e.target.value);
    // };

    const handleClick = (value) => {
        setSelected(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setResult(selected === correctAnswer ? "Bonne réponse" : "Mauvaise réponse");
    };

    return (
        <div>
            <Navbar/>
            <h1 className='name_main'>Bonjour {username}</h1>
            {/* <div>
                <input type="text" value={newUsername} onChange={handleUsernameChange}/>
                <button onClick={updateUsername}>Modifier le Username</button>
            </div> */}
            <h2>QCM</h2>
            <form className='form_main' onSubmit={handleSubmit}>
                <div className='question'>
                    <p>Question</p>
                    <label className='label_main'>
                    <div className='response'>AAAA</div>
                        <input type='radio' name='qst1' value='a'
                        checked={selected === "a"} onChange={() => handleClick('a')}
                    /></label><br/>
                    
                    <label className='label_main'>
                    <div className='response'>BBBB</div>
                        <input type='radio' name='qst1' value='b'
                        checked={selected === "b"} onChange={() => handleClick('b')}
                    /></label><br/>
                    
                    <label className='label_main'>
                    <div className='response'>CCCC</div>
                        <input type='radio' name='qst1' value='c' 
                        checked={selected === "c"} onChange={() => handleClick("c")} 
                    /></label>
                </div>
            </form>

            <form className='form_main' onSubmit={handleSubmit}>
                <div className='question'>
                    <p>Question</p>
                    <label className='label_main'>
                    <div className='response'>AAAA</div>
                        <input type='radio' name='qst2' value='a'
                        checked={selected === "a"} onChange={() => handleClick('a')}
                    /></label><br/>
                    
                    <label className='label_main'>
                    <div className='response'>AAAA</div>
                        <input type='radio' name='qst2' value='b'
                        checked={selected === "b"} onChange={() => handleClick('b')}
                    /></label><br/>
                    
                    <label className='label_main'>
                    <div className='response'>AAAA</div>
                        <input type='radio' name='qst2' value='c' 
                        checked={selected === "c"} onChange={() => handleClick("c")} 
                    /></label>
                </div>
            </form>

            <button type='submit'>Valider</button> 
            {result && <p>{result}</p>}
        </div> 
    )
}

export default Main