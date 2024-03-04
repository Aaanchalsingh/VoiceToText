// App.js
import React from 'react';
import SpeechToText from './SpeechToText'; // Import the SpeechToText component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Remove the logo and other default content */}
        <h1>Voice-to-Text Recognition Example</h1>
        <SpeechToText /> {/* Render the SpeechToText component */}
      </header>
    </div>
  );
}

export default App;
