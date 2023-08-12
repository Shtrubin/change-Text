import { useState } from "react"
import React from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText= text.toUpperCase();
        SetText(newText);
    }

    const handelonChange=(event)=>{
        SetText(event.target.value);
    }
    const[text,SetText]= useState('Enter the  text now');
  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handelonChange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button type="button" onClick={handleUpClick} className="btn btn-primary">UpperCase</button>
    </div>
  )
}
