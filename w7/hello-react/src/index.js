import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Button = (props) => {
  return (
    <button onClick={props.reset}> {props.word}</button>

  );
};

const Application = () => {

  const [name, setName] = useState('');
  

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const reset = () => {
    setName('');
  };

  return (
    <main>
      {/* your code here -- this entire line including the curly braces can be removed */}
      <h1> {name && `Hello ${name}` }</h1>
      <input value={name} onChange={handleInput} placeholder="Type your name."/>
      <Button reset={reset} word={'reset'} />
    </main>
  );
};

ReactDOM.render(<Application />, document.getElementById("root"));
