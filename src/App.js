import { useState } from 'react';
import './App.css';
import BackGroundAnimate from './BackGroundAnimate';
import InputShortner from './inputShortner';
import LinkResult from './LinkResult';

function App() {
  const[inputValue, setInputValue]=useState('');
  return (
    <div className="container">
      <InputShortner setInputValue={setInputValue} />
      <BackGroundAnimate />
      <LinkResult inputValue={inputValue} />
    </div>
  );
}

export default App;
