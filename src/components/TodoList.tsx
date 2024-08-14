import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

export default function TodoList() {
    const allTodos = useSelector(state => state.todo.value)
    return (
        <div className="w-full mt-4 flex flex-col gap-1">
            {
                allTodos.map(todo => (
                    <TodoItem key={todo.todoId} todo={todo} />
                ))
            }
        </div>
    )
}
