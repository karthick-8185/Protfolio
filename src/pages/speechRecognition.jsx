import React, { useRef, useState } from 'react';
import './style.css';

function Landingpage() {
  const recognitionRef = useRef(null);
  const [isListening, setIsListening] = useState(false);
  const [speech,setSppech]=useState("")

  const startSpeechRecognition = () => {
    if (!('webkitSpeechRecognition' in window)) {
      alert('Speech Recognition not supported in this browser.');
      return;
    }

    const rec = new webkitSpeechRecognition();
    recognitionRef.current = rec;

    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = 'en-US';

    rec.onstart = () => {
      console.log('Speech recognition started');
      setIsListening(true);
    };

    rec.onresult = (event) => {
      let transcript = '';
      for (let i = event.resultIndex; i < event.results.length; ++i) {
        transcript += event.results[i][0].transcript;
      }
      console.log('Recognized speech:', transcript);
      setSppech(transcript)
    };

    rec.onerror = (event) => {
      console.error('Speech recognition error:', event.error);
    };

    rec.onend = () => {
      console.log('Speech recognition ended');
      setIsListening(false);
    };

    rec.start();
  };

  const stopSpeechRecognition = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setSppech('')
  };
  console.log("hii");

  return (
    <div className='bg-'>
      <h1>Speech Recognition Demo</h1>
      <button onClick={startSpeechRecognition} disabled={isListening}>
        Start Listening
      </button>
      <button onClick={stopSpeechRecognition} disabled={!isListening}>
        Stop Listening
      </button>
      {speech}
    </div>
  );
}

export default Landingpage;
