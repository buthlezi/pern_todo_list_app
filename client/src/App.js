import React, { Fragment } from 'react';
import InputTodo from './components/InputTodo';
// components folder is in the same (src)folder as App.js 
import './App.css';

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputTodo />
    </div>
  </Fragment>
  );
}

export default App;
