import './App.css';
import React,{useEffect,useState}from 'react';
import Lcdscreen from './Lcdscreen';
import Form from './Form';

function App() {

  const [text,setText] = useState("")

  const changeText = () => {
    
  }

  return(
    <div className='App'>
      <Lcdscreen/>
      <Form/>
    </div>
  );
}

export default App;
