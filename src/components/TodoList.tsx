import TodoItem from "./TodoItem";
import { useTodoContext } from "../hooks/useTodoContext";

export default function TodoList() {
    const { allTodos } = useTodoContext()
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
