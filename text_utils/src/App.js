import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode,setMode]=useState('light'); //whether dark mode is enabled or not
  return (
    <>
      <Navbar title="TextUtils_by_Shikhar" mode={modeode} toggleMode={setMode}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze"/>
        <About/>
      </div>
    </>
  );
}

export default App;
