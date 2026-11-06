import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./todosReducer";
import type { RootState } from "./store";
import ReduxTodoForm from "./ReduxTodoForm";
import ReduxTodoItem from "./ReduxTodoItem";

export default function ReduxTodos() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("Learn Mongo");
  const [editingId, setEditingId] = useState<string | null>(null);

  function saveTodo() {
    if (editingId !== null) {
      dispatch(updateTodo({ id: editingId, title }));
      setEditingId(null);
    } else {
      dispatch(addTodo(title));
    }

    setTitle("Learn Mongo");
  }

  return (
    <div id="wd-redux-todos">
      <h3>Redux Todo List</h3>

      <ReduxTodoForm
        title={title}
        onTitleChange={setTitle}
        isEditing={editingId !== null}
        onSave={saveTodo}
      />

      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <ReduxTodoItem
            key={todo.id}
            todo={todo}
            onEdit={() => {
              setTitle(todo.title);
              setEditingId(todo.id);
            }}
            onDelete={() => dispatch(deleteTodo(todo.id))}
          />
        ))}
      </ul>
    </div>
  );
}