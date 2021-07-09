import React from "react";
import { useDispatch } from "react-redux";
import uuid from "react-uuid";

import { addToDo } from "../store/reducers/todo/actions";
import firebase from "firebase";
import db from "../firebase";

function Input({ isUpdated, input, setInput, handleUpdateToDo, setIsAdd }) {
  const dispatch = useDispatch();

  //Function that create a todo item and add it th elist
  const handleAddToDo = (event) => {
    const todo = {
      item: input,
      completed: false,
      id: uuid(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };
    event.preventDefault();
    //add todo to the firebase
    db.collection("todos").add({
      todo: todo,
    });

    dispatch(addToDo(todo));
    //clear the input field
    setInput("");
    //to handle toggle open and close add input to screen
    setIsAdd(false);
  };

  return (
    <div className="space-x-2 px-6 mx-auto w-full lg:w-4/5">
      <input
        className={`${
          isUpdated ? "w-36 py-1" : "w-4/5 py-2"
        } px-3 md:py-3 mt-1 border-2 border-purple-300 md:w-4/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent`}
        value={input}
        type="text"
        onChange={(event) => setInput(event.target.value)}
      />
      {isUpdated ? (
        //use input component to unpdate todo item in the list
        <button
          onClick={handleUpdateToDo}
          className=" text-sm md:text-lg bg-purple-500 text-white px-4 py-2 rounded-2xl cursor hover:bg-purple-900 "
        >
          Edit
        </button>
      ) : (
        //use input component to add todo item in the list
        <button
          onClick={handleAddToDo}
          className="bg-purple-500 text-white px-4 py-2 rounded-2xl cursor hover:bg-purple-900 "
        >
          Add
        </button>
      )}
    </div>
  );
}

export default Input;
