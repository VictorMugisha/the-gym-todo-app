import { FaTrash } from "react-icons/fa";
import { TodoTypes } from "../types/TodoTypes";

interface TodoItemProps {
    todo: TodoTypes
}

export default function TodoItem({todo}: TodoItemProps) {
    return (
        <div className="flex items-center justify-between border-b border-red-100 pb-2">
            <div className="flex items-center gap-8">
                <input
                    type="checkbox"
                    name="isCompleted"
                    className="w-5 h-5"
                />
                <p
                className="text-lg"
                >
                    {todo.todoTitle}
                </p>
            </div>
            <button className="w-12 h-12 bg-red-100 flex items-center justify-center rounded-full">
                <FaTrash className="text-red-500 text-xl" />
            </button>
        </div>
    )
}
