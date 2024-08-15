import { nanoid } from "nanoid";
import { useRef, useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { TodoTypes } from "../types/TodoTypes";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todos/todosSlice";

export default function TodoForm() {
    const dispatch = useDispatch()

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
        // Populating the store using form data
        dispatch(addTodo(formData))
        setFormData({
            todoId: nanoid(),
            todoTitle: '',
            isCompleted: false
        })
    }

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [])

    return (
        <form
            className="w-full mb-8"
            onSubmit={handleSubmit}
        >
            <div className="w-full border border-slate-300 rounded-[2.5rem] shadow-2xl shadow-black flex items-center justify-between py-3 px-6">
                <input
                    type="text"
                    ref={inputRef}
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
