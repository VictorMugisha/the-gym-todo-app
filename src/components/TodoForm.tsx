import { FaPlusCircle } from "react-icons/fa";

export default function TodoForm() {
    return (
        <form className="w-full mb-8">
            <div className="w-full border border-slate-300 rounded-[2.5rem] shadow-2xl shadow-black flex items-center justify-between py-3 px-6">
                <input
                    type="text"
                    placeholder="Add todo..."
                    className="w-full placeholder:text-black outline-none text-xl"
                />
                <button>
                    <FaPlusCircle className="text-custom-cyan text-3xl" />
                </button>
            </div>
        </form>
    )
}
