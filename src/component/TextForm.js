import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        SetText(newText);

    }

    const handleLoClick=()=>{
        let newText= text.toLowerCase();
        SetText(newText);
    }
    const handleClearClick=()=>{
        let newText=(" ")
        SetText(newText);
    }
    const handleRevClick=()=>{
        let newText= text.split('').reverse().join('');
        SetText(newText);
    }
    const handelonChange=(event)=>{
        SetText(event.target.value);
    }
    const[text,SetText]= useState('Enter the  text now');
  return (
    <>
    <div className="Container">  
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary mx-2">UpperCase</button>
        <button type="button" onClick={handleLoClick} className="btn btn-primary mx-2">LowerCase</button>
        <button type="button" onClick={handleClearClick} className="btn btn-primary mx-2">Clear</button>
        <button type="button" onClick={handleRevClick} className="btn btn-primary mx-2">Reverse</button>

    </div>
    <div className="container">
        <h2>Text Summary</h2>
        <p>The text have {text.split(" ").length} word and {text.length} characters</p>
        <p>Time it takes to read {0.002*text.split(" ").length}</p>
    </div>
    <h3>TEXT PREVIEW</h3>
    <p>{text}</p>
    </>
  )
}
