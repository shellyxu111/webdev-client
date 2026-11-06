import { createContext, createElement, useContext, useState, type ReactNode } from "react";

type Todo = {
  id: string;
  title: string;
};

type TodosContextValue = {
  todos: Todo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
    const [todos, setTodos] = useState<Todo[]>([
      { id: "1", title: "Read Chapter 4" },
      { id: "2", title: "Build the Context todo list" },
      { id: "3", title: "Test the Lab 4 page" },
    ]);

    function addTodo(title: string) {
      const newTodo = { id: crypto.randomUUID(), title };
      setTodos((current) => [...current, newTodo]);
    }

    function updateTodo(id: string, title: string) {
      setTodos((current) =>
        current.map((todo) => (todo.id === id ? { ...todo, title } : todo))
      );
    }

    function deleteTodo(id: string) {
      setTodos((current) => current.filter((todo) => todo.id !== id));
    }

    return createElement(
      TodosContext.Provider,
      { value: { todos, addTodo, updateTodo, deleteTodo } },
      children
    );
  }

  export function useTodosContext() {
    const value = useContext(TodosContext);

    if (!value) {
      throw new Error("useTodosContext must be used inside TodosProvider");
    }

    return value;
  }