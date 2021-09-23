import React , {useState} from 'react'
import './index.css'

const Chat = () =>
{
    const[text, setText] = useState('');

    let messages = [];

    const saveText = () =>
    {
        messages.push(text);
        setText('');
    }

    return(
        <div>

        <input type='text' id='textinput' placeholder="Type your Query" value={text} onChange={ (event) => setText(event.target.value)}/>

        <button id='sendbutton' type='submit' onClick={saveText}>
            Enter
        </button>

        </div>
    )
}

export default Chat;