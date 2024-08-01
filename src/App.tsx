import { useState } from "react";
import TodoBanner from "./components/TodoBanner";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoContext } from "./contexts/TodoContext";
import { TodoTypes } from "./types/TodoTypes";

export default function App() {
  const [allTodos, setAllTodos] = useState<TodoTypes[]>([])
  return (
    <main className="flex flex-col items-center justify-center max-w-3xl mx-auto py-16 px-8 mt-8 border-slate-300 border">
      <TodoContext.Provider value={{allTodos, setAllTodos}}>
        <TodoBanner />
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </main>
  )
}
