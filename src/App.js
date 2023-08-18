import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {

  const[mode,setMode]= useState('light');
  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
    }else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
<Navbar title="My App" mode={mode} toogleMode={toogleMode}/>
<div className="container">
<TextForm heading="Enter the text here" mode={mode}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
