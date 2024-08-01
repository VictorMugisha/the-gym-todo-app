import { nanoid } from "nanoid";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { TodoTypes } from "../types/TodoTypes";
import { useTodoContext } from "../hooks/useTodoContext";

export default function TodoForm() {
    const { setAllTodos } = useTodoContext()

    const [formData, setFormData] = useState<TodoTypes>({
        todoId: nanoid(),
        todoTitle: '',
        isCompleted: false
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setFormData(currentState => {
            return {
                ...currentState,
                todoTitle: value
            }
        })
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        if (formData.todoTitle == '') {
            alert("Todo must have a title!!")
            return
        }

        setAllTodos(currentTodos => {
            return [formData, ...currentTodos]
        })

        setFormData({
            todoId: nanoid(),
            todoTitle: '',
            isCompleted: false
        })
    }

    return (
        <form
            className="w-full mb-8"
            onSubmit={handleSubmit}
        >
            <div className="w-full border border-slate-300 rounded-[2.5rem] shadow-2xl shadow-black flex items-center justify-between py-3 px-6">
                <input
                    type="text"
                    placeholder="Add todo..."
                    className="w-full placeholder:text-black outline-none text-xl"
                    value={formData?.todoTitle}
                    onChange={handleChange}
                />
                <button>
                    <FaPlusCircle className="text-custom-cyan text-3xl" />
                </button>
            </div>
        </form>
    )
}
