import { PlusCircleIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "./components/Input";
import ToDoDetails from "./components/toDoDetails";
import db from "./firebase";
import {
  clearTodoList,
  completedList,
  getToDos,
} from "./store/reducers/todo/actions";

function App() {
  const { toDoList } = useSelector((state) => state.todo);
  const [input, setInput] = useState("");
  const [isAdd, setIsAdd] = useState(false);

  const dispatch = useDispatch();

  //function that handle to clear all todos list
  const clearList = () => {
    dispatch(clearTodoList());
  };

  //function that set completed all todos list
  const completeAllList = () => {
    dispatch(completedList({ completed: true }));
  };

  useEffect(() => {
    //get todos list from firebase
    db.collection("todos")
      .orderBy("timestamp", "des")
      .onSnapshot((snapshot) => {
        dispatch(getToDos(snapshot.docs.map((doc) => doc.data().todo)));
      });
  }, []);

  return (
    <div className="grid bg-gray-200 min-h-screen grid-col-1 grid-rows-4 relative">
      <h2 className="text-center uppercase text-2xl text-purple-900 mt-10">
        TO DO LIST app
      </h2>
      {isAdd ? (
        <Input input={input} setInput={setInput} setIsAdd={setIsAdd} />
      ) : (
        <button
          className="absolute right-10 top-10"
          onClick={() => setIsAdd(true)}
        >
          <PlusCircleIcon className="h-10 text-purple-600 " />
        </button>
      )}

      {toDoList.length > 0 ? (
        <>
          <div className=" lg:w-4/5 mx-10 bg-yellow-100 p-4 rounded-2xl row-span-2 mb-10 ">
            {toDoList.map((toDo) => (
              <ToDoDetails
                key={toDo.id}
                toDo={toDo}
                input={input}
                setInput={setInput}
                setIsAdd={setIsAdd}
              />
            ))}
          </div>
          <div className="flex justify-around my-auto">
            <button
              onClick={clearList}
              className="bg-red-500 text-white px-4 py-2 w-max rounded-2xl cursor hover:bg-red-900 "
            >
              clear list
            </button>

            <button
              onClick={completeAllList}
              className="bg-green-500 text-white px-4 py-2 w-max rounded-2xl cursor hover:bg-green-900 "
            >
              complete list
            </button>
          </div>
        </>
      ) : (
        <h2 className="text-center uppercase text-xl">
          Let's start to plan your Day
        </h2>
      )}
    </div>
  );
}

export default App;
