import React from 'react';
import SpeechToText from './SpeechToText';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Voice-to-Text Recognition</h1>
        <SpeechToText />
      </header>
    </div>
  );
}

export default App;
