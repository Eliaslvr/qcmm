import { useState } from 'react'
import Navbar from '../Navbar/Navbar'

function Main() {

    const [selected, setSelected] = useState(""); 
    const [result, setResult] = useState(null);

    const correctAnswer = "a";

    const handleClick = (value) => {
        setSelected(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selected === correctAnswer) {
            setResult('Bonne réponse')
        } else {
            setResult('Mauvaise réponse')
        }
    }

    return (
        <div>
            <Navbar/>
            <h1 className='name_main'>Bonjour ....</h1>
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