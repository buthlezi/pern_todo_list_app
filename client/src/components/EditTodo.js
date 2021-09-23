import React, { Fragment, useState } from "react";
// the following imports were added:
// import 'bootstrap/dist/css/bootstrap.css';
import {Modal, Button} from 'react-bootstrap';

const EditTodo = ({ todo }) => { // set todo as prop
  const [description, setDescription] = useState(todo.description);
  // todo.description sets default value of description which is to be updated
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //edit description function

  const updateDescription = async e => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch(
        `http://localhost:5000/todos/${todo.todo_id}`, // see line 69 in index.js
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        className="btn btn-warning"
        onClick={handleShow}
        //line 36 replaces the following:
        // data-toggle="modal"
        // data-target={`#id${todo.todo_id}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      {/* <div replaced with <Modal */}
      <Modal
        show={show}
        // line 50 replaces the following 2 lines:
        // className="modal"
        // id={`id${todo.todo_id}`}
        onClick={() => setDescription(todo.description)}
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Todo</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                onClick={handleClose} 
                // line 64 replaces:
                // onClick={() => setDescription(todo.description)}
              >
                &times;
              </button>
            </div>

            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDescription(e)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
                onClick={handleClose}
                // line 92 replaces:
                // onClick={() => setDescription(todo.description)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        {/* </div> number 4 replaced with </Modal> */}
      </Modal>
    </Fragment>
  );
};

export default EditTodo;
