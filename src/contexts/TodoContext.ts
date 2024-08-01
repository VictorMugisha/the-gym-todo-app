import { createContext } from "react";
import { TodoTypes } from "../types/TodoTypes";

interface ContextTypes {
    allTodos: TodoTypes[];
    setAllTodos: React.Dispatch<React.SetStateAction<TodoTypes[]>>;
}

export const TodoContext = createContext<ContextTypes | undefined>(undefined)

export function useTodoContext() {
    if (TodoContext === undefined) {
        throw new Error("Attemped To use TodoContext without a provider")
    }

    return TodoContext
}