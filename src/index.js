import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Chat from './chat'

class Page extends React.Component
{
    render()
    {
        return (
            <div className='fill'>
                <Chat name={''} />
            </div> 
        );
    }
}

ReactDOM.render( <Page />, document.getElementById('root'));