import React, { useState } from 'react';
import './App.css';
import Navbar from './my_components/Navbar';
import About from './my_components/About';
import Alert from './my_components/Alert';
import Textform from './my_components/TextForm';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('DARK MODE HAS BEEN ENABLED', 'success');
      document.body.style.backgroundColor = '#47566b';
    } else {
      setMode('light');
      showAlert('LIGHT MODE HAS BEEN ENABLED', 'success');
      document.body.style.backgroundColor = 'white';
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Textform showAlert={showAlert} heading="Enter your text to Analyze" />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
