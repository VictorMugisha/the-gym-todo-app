import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodosType = {
    todoId: string;
    todoTitle: string;
    isCompleted: boolean;
}

const initialValue: TodosType[] = []

export const todosSlice = createSlice({
    name: "todos",
    initialState: {
        value: initialValue,
    },
    reducers: {
        addTodo: (state, action: PayloadAction<TodosType>) => {
            state.value = [...state.value, action.payload]
        },
        completeTodo: (state, action: PayloadAction<string>) => {
            const newTodos = state.value.map(todo => {
                if (todo.todoId === action.payload) {
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                } else {
                    return todo
                }
            })
            state.value = newTodos
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const filteredTodos = state.value.filter(todo => todo.todoId !== action.payload)
            state.value = filteredTodos
        }
    }
})

export const { addTodo, completeTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer