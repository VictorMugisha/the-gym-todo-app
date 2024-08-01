import { nanoid } from "nanoid";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

interface ITodo {
    id: string;
    title: string;
    isComplete: boolean;
}

export default function TodoForm() {
    const [formData, setFormData] = useState<ITodo>({
        id: nanoid(),
        title: '',
        isComplete: false
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = event.target
        setFormData(currentState => {
            return {
                ...currentState,
                title: value
            }
        })
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        alert(JSON.stringify(formData))
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
                    value={formData?.title}
                    onChange={handleChange}
                />
                <button>
                    <FaPlusCircle className="text-custom-cyan text-3xl" />
                </button>
            </div>
        </form>
    )
}
