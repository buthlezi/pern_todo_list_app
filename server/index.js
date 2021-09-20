const express = require('express');
// this imports the express server library
const app = express();
// this runs the express library - now app has all the methods to create a server
const cors = require('cors')
// this imports the cors library
const pool = require('./db');
// this imports db.js


// middleware
app.use(cors());
// allows local (port) 3000 and local(port) 5000 apps to interact with each other
app.use(express.json()) // allows us to acces the req.body - can also get JSON data 

// Routes//

// get all todos

app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query(
      "SELECT * FROM todo");

    res.json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// get a todo

app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await pool.query(
      "SELECT * FROM todo WHERE todo_id = $1", 
      [id]
      );
      res.json(todo.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
});

// create a todo

app.post("/todos", async (req, res) => {
  try {
    // res.json(req.body);
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES ($1) RETURNING *",
      [description]
    );

// e.g "INSERT INTO todo (description) VALUES ('Hi') RETURNING *"
// [description] is the actual value of $1 - in this case 'Hi'
// RETURNING * displays all the column values from the database

    res.json(newTodo.rows[0]); // access first item in 'rows'
  } catch (err) {
    console.error(err.message);
  }
});
// update a todo

app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2",
      [description, id]
    );

  // e.g "UPDATE todo SET description = 'need to mow the lawn' WHERE todo_id = '4' "

    res.json("Todo was updated");
  } catch (err) {
    console.error(err.message)
  }
})

// delete a todo

app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM todo WHERE todo_id = $1",
      [id] 
    );

    res.json("Todo was deleted");
  } catch (err) {
    console.error(error.message)
  }
});


app.listen(5000, () => {
  console.log("Starting server on port 5000");
});