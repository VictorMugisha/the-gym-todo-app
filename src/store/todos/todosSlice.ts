import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodosType = {
    todoId: string;
    todoTitle: string;
    isCompleted: boolean;
}

type TodoState = {
    value: TodosType[]
}

const initialValue: TodosType[] = JSON.parse(localStorage.getItem("todos") || "[]"); 

const initialState: TodoState =  {
    value: initialValue,
}

export const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TodosType>) => {
            state.value = [...state.value, action.payload]
            localStorage.setItem("todos", JSON.stringify(state.value))
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
            localStorage.setItem("todos", JSON.stringify(state.value))
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const filteredTodos = state.value.filter(todo => todo.todoId !== action.payload)
            state.value = filteredTodos
            localStorage.setItem("todos", JSON.stringify(state.value))
        }
    }
})

export const { addTodo, completeTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer