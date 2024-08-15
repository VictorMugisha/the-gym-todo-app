import TodoItem from "./TodoItem";
// import { useTodoContext } from "../hooks/useTodoContext";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function TodoList() {
    const todos = useSelector((state: RootState) => state.todos.value)
    // const { allTodos } = useTodoContext()
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
