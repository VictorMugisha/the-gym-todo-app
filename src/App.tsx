import TodoBanner from "./components/TodoBanner";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
 
  return (
    <main className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto py-16 px-8 mt-8 border-slate-300 border">
        <TodoBanner />
        <TodoForm />
        <TodoList />
    </main>
  );
}
