import { createSlice } from "@reduxjs/toolkit";
import { TodoTypes } from "../types/TodoTypes";

const initialValue: TodoTypes = {
    todoTitle: "",
    todoId: "",
    isCompleted: false
}

export const todoSlice = createSlice({
    name: "allTodos",
    initialState: {
        value: initialValue
    },
    reducers: {
        addTodo: (state, action) => {
            state.value = action.payload
        },
        deleteTodo: (state) => {
            state.value = initialValue
        },
        updateTodo: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions
export default todoSlice.reducer 