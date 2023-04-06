import React from 'react';
import {useState} from 'react';
export default function InputShortner({setInputValue}) {
    const[value, setValue]=useState("");
    const handleClick=()=>{
        setInputValue(value);
        setValue("");
    }
  return (
    <div className ="inputContainer">
        <h1> URL <span> Shortener </span></h1>
        <div>
            <input type='text' value={value}
            onChange={e=>setValue(e.target.value)}
             placeholder='Paste a link to shorten it' />
            <button onClick={handleClick}>Shorten</button>
        </div>
    </div>
  )
}
