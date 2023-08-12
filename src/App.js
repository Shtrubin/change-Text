import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
function App() {
  return (
    <>
<Navbar title="My App" aboutText="About us"/>
<div className="container">
<TextForm heading="Enter the text here"/>
</div>
    </>
  );
}

export default App;
