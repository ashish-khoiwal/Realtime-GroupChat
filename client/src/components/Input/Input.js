import React from 'react'
import './Input.css';

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form className ='form'>
            <input
            className = 'input'
            type = 'text'
            onChange = {(e)=> setMessage(e.target.value)}
            value = {message}
            placeholder = 'Type a message...'
            onKeyPress = {e=>e.key ==='Enter'? sendMessage(e):null}
            />
            <button onClick = {(e)=>sendMessage(e)} className = 'sendButton'>
                Send
            </button>
        </form>
    )
}

export default Input
