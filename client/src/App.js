import React, { Fragment, useState } from 'react';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';
// components folder is in the same (src)folder as App.js 

import './App.css';

function App() {
  return (
  <Fragment>
    <div className="container">
      <InputTodo />
      <ListTodos />
    </div>
  </Fragment>
  );
}

export default App;
