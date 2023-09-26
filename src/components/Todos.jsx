import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todoReducer.todos);
  const dispatch = useDispatch();

  const handleDelete = (todoId) => {
    dispatch(removeTodo(todoId));
  };
  return (
    <>
      <div>Todos</div>
      {todos.map((todo) => (
        <div key={todo.id}>
          {todo.text}
          <button
            className="px-2 py-1 bg-red-500 text-white rounded-md ml-2"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default Todos;
