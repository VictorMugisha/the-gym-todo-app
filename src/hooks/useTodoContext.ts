import { TodoContext } from "../contexts/TodoContext"
import { useContext } from "react"

export function useTodoContext() {
    const todoContext = useContext(TodoContext)
    
    if (todoContext === undefined) {
        throw new Error("Attemped To use TodoContext without a provider")
    }

    return todoContext
}