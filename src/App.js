import { useState } from 'react';
import './App.css';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import Alerts from './component/Alerts';
function App() {

  const[mode,setMode]= useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toogleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been enabled","success");
    }else
    {
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }

  }
  return (
    <>
<Navbar title="My App" mode={mode} toogleMode={toogleMode}/>
<Alerts alert={alert}/>
<div className="container">
<TextForm showAlert={showAlert} heading="Enter the text here" mode={mode}/>
{/* <About/> */}
</div>
    </>
  );
}

export default App;
