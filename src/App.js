import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import TextForm from './component/textForm'; 
function App() {
  return (
    <>
      <Navbar title="Lokesh" />
      <div className="container my-3">
        <TextForm heading="Enter text to:" />  
      </div>
    </>
  );
}

export default App;
