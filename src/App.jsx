import React, { useState } from 'react';

export default function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

function Form() {
  const [inputText, setInputText] = useState('');
  const [submittedText, setSubmittedText] = useState('');

  const handleChange = (event) => {
    const text = event.target.value;
    setInputText(text);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedText((preS) => (

       preS + ' ' + inputText

    ) );
    setInputText(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" value={inputText} onChange={handleChange} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
      <ResultDisplay submittedText={submittedText} />
    </form>
  );
}

function ResultDisplay({ submittedText }) {
  return (
    <div style={{ border: '2px solid black', padding: '10px', marginTop: '20px' }}>
      <p>Submitted Text:</p>
      <p>{submittedText}</p>
    </div>
  );
}
