import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { TodoTypes } from "../types/TodoTypes";

export default function TodoList() {
    const todos: TodoTypes[] = useSelector((state: RootState) => state.todos.value);
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
