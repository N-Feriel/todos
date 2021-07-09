import React, { useState } from "react";
import {
  CheckCircleIcon,
  PencilAltIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { EditToDo, removeToDo } from "../store/reducers/todo/actions";
import Input from "./Input";

function ToDoDetails({ toDo, input, setInput }) {
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useDispatch();

  //FUNCTION THAT SET TODO ITEM TO COMPLETED
  const handleCompleted = () => {
    const completedToDo = { ...toDo, completed: !toDo.completed };
    dispatch(EditToDo(completedToDo));
  };

  //FUNCTION TO DELETE TODO ITEM
  const handleDelete = (item) => {
    dispatch(removeToDo(item));
  };

  //OPEN TO INPUT FIELD AND SET INPUT VALUE
  const handleEdit = () => {
    setInput(toDo.item);
    setIsUpdated(true);
  };

  //UPDATE TODO ITEM
  const handleUpdateToDo = (event) => {
    event.preventDefault();
    const updatedToDo = { ...toDo, item: input };
    dispatch(EditToDo(updatedToDo));
    setInput("");
    setIsUpdated(false);
  };

  return (
    <div className="grid grid-flow-col grid-cols-7 bg-gray-400 py-2 px-3 rounded-xl mx-6 my-4 ">
      <button onClick={() => handleCompleted(toDo)}>
        <CheckCircleIcon className="h-6 text-green-400 cursor " />
      </button>
      {isUpdated ? (
        <div className="col-span-6">
          <Input
            isUpdated={isUpdated}
            setIsUpdated={setIsUpdated}
            input={input}
            setInput={setInput}
            handleUpdateToDo={handleUpdateToDo}
          />
        </div>
      ) : (
        <h2
          className={`col-span-5 text-white text-sm lg:text-lg ${
            toDo.completed ? "line-through text-green-800" : ""
          } `}
        >
          {toDo.item}
        </h2>
      )}
      <div className="flex justify-center align-baseline wrap">
        <button onClick={handleEdit}>
          <PencilAltIcon className="h-6 text-yellow-400 cursor mx-2 lg:mx-6" />
        </button>
        <button onClick={() => handleDelete(toDo)}>
          <TrashIcon className="h-6 text-red-800 cursor mx-2 lg:mx-6" />
        </button>
      </div>
    </div>
  );
}

export default ToDoDetails;
