import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar 
        title="TextUtils_by_Shikhar" 
        mode={mode} 
        toggleMode={toggleMode}
      />
      <div className="container my-3">
        <TextForm 
          heading="Enter the text to analyze" 
          mode={mode}
        />
        <About mode={mode}/>
      </div>
    </>
  );
}

export default App;

