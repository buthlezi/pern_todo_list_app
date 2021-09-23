import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState(""); // sets a state called description
  // which is changed with setDescription
  // clicking 'Add' button sets the state into the route on line 11 with POST method
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { description };  // assigns description to body
      const response = await fetch("http://localhost:5000/todos", {
        method: "POST", // see line 48 in index.js
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;