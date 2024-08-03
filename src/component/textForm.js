import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => setText(text.toUpperCase());
  const handleLoClick = () => setText(text.toLowerCase());
  const handleClearClick = () => setText('');
  const handleReverseClick = () => setText(text.split('').reverse().join(''));
  const handleCapitalizeClick = () => setText(text.replace(/\b\w/g, char => char.toUpperCase()));
  const handleCopyClick = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
        .then(() => alert("Copied to clipboard!"))
        .catch(err => alert("Failed to copy text: " + err));
    } else {
      alert("Clipboard API not supported.");
    }
  };
  const handleRemoveExtraSpacesClick = () => setText(text.replace(/\s+/g, ' ').trim());
  const getWordCount = (text) => text.split(/\s+/).filter(word => word).length;
  const handleFocus = (e) => {
    if (e.target.value === 'Enter text here') {
      setText('');
    }
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={handleFocus}
            placeholder="Enter text here"
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} aria-label="Convert text to uppercase">Upper Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick} aria-label="Convert text to lowercase">Lower Case</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick} aria-label="Clear the text">Clear Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleReverseClick} aria-label="Reverse the text">Reverse Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCapitalizeClick} aria-label="Capitalize the first letter of each word">Capitalize Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick} aria-label="Copy text to clipboard">Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleRemoveExtraSpacesClick} aria-label="Remove extra spaces">Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{getWordCount(text)} words and {text.length} characters</p>
        <p>{0.008 * getWordCount(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
