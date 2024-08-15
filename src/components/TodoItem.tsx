import { FaTrash } from "react-icons/fa";
import { TodoTypes } from "../types/TodoTypes";
import { useDispatch } from "react-redux";
import { completeTodo, deleteTodo } from "../store/todos/todosSlice";

interface TodoItemProps {
    todo: TodoTypes
}

export default function TodoItem({ todo }: TodoItemProps) {
    const dispatch = useDispatch()

    const { todoTitle, todoId, isCompleted } = todo
    function handleDeleteTodo() {
        dispatch(deleteTodo(todoId))
    }

    function handleCompleteTodo() {
        dispatch(completeTodo(todoId))
    }

    return (
        <div className="flex items-center justify-between border-b border-red-100 pb-2">
            <div className="flex items-center gap-8">
                <input
                    type="checkbox"
                    name="isCompleted"
                    className="w-5 h-5"
                    checked={isCompleted}
                    onChange={handleCompleteTodo}
                />
                <p
                    className={`text-lg ${isCompleted ? 'line-through' : ''}`}
                >
                    {todoTitle}
                </p>
            </div>
            <button
                className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-full"
                onClick={handleDeleteTodo}
            >
                <FaTrash className="text-red-500 text-xl" />
            </button>
        </div>
    )
}
