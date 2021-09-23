import React, { Fragment, useEffect, useState } from "react";

import EditTodo from "./EditTodo";

const ListTodos = () => {         // 
  const [todos, setTodos] = useState([]); // default value of list 'todos' is empty
  // setTodos adds values to the list

  //delete todo function

  const deleteTodo = async id => {    // asynchronous delete call to database
    try {
      const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`, {  // wait to fetch and delete item from database
        method: "DELETE"
      });
      setTodos(todos.filter(todo => todo.todo_id !== id)); // calls SetTodos and uses filter method the state
    } catch (err) {                                        // to filter the state that follow !== condition 
      console.error(err.message);
    }
  };

  // get todos function
  
  const getTodos = async () => {  // see line 33 of index.js
    try {
      const response = await fetch("http://localhost:5000/todos");
      const jsonData = await response.json();

      setTodos(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // console.log(todos);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {todos.map(todo => (  // takes todo variable and iterates over all values to get all todos out
            <tr key={todo.todo_id}> {/* displays todos a rows in a table */}
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.todo_id)} // button utilizes description and id
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;