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
            const newTodos = state.value.filter(todo => {
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
        }
    }
})

export const { addTodo, completeTodo } = todosSlice.actions
export default todosSlice.reducer