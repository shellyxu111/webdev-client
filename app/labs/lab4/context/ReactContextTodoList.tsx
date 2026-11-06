import { useState, type SubmitEvent } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  function clearEditor() {
    setTitle("");
    setEditingId(null);
  }

  function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedTitle = title.trim();

    if (!trimmedTitle) return;

    if (editingId === null) {
      addTodo(trimmedTitle);
    } else {
      updateTodo(editingId, trimmedTitle);
    }

    clearEditor();
  }

  return (
    <section>
      <h3>React Context Todo List</h3>

      <form onSubmit={handleSubmit} className="flex items-center gap-1">
        <label htmlFor="wd-context-todo-title">Todo title</label>
        <input
          id="wd-context-todo-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <button type="submit">{editingId === null ? "Add" : "Save"}</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button
              type="button"
              onClick={() => {
                setEditingId(todo.id);
                setTitle(todo.title);
              }}
            >
              Edit
            </button>{" "}
            <button
              type="button"
              onClick={() => {
                deleteTodo(todo.id);
                if (editingId === todo.id) clearEditor();
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}