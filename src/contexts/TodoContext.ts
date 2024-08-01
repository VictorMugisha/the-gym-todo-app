import { createContext } from "react";
import { TodoTypes } from "../types/TodoTypes";

export interface ContextTypes {
    allTodos: TodoTypes[];
    setAllTodos: React.Dispatch<React.SetStateAction<TodoTypes[]>>;
}

export const TodoContext = createContext<ContextTypes | undefined>(undefined)
