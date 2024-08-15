import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TodoTypes } from "../types/TodoTypes";
import { useEffect } from "react";

export default function TodoList() {
    const localTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    const todos: TodoTypes[] = localTodos.length > 0 ? localTodos : useSelector((state: RootState) => state.todos.value);

    useEffect(() => {
        console.log("Changed from here");
    }, [todos])
    return (
        <div className="w-full mt-4 flex flex-col gap-1">
            {
                todos.map(todo => (
                    <TodoItem key={todo.todoId} todo={todo} />
                ))
            }
        </div>
    )
}
