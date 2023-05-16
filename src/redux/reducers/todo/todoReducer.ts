import { RootState } from '../../rootReducer'
import { TodoAction, TodoActionEnum, TodoState } from './actions/types'

const initialState: TodoState = {
    todos: [],
}

export default function todoReducer(state = initialState, action: TodoAction): TodoState {
    switch (action.type) {
        case TodoActionEnum.ADD_TODO:
            return { ...state, todos: [...state.todos, action.payload] }
        case TodoActionEnum.DELETE_TODO: {
            const arr = state.todos.filter((item) => item.id !== action.payload)

            return { ...state, todos: arr }
        }

        default:
            return state
    }
}

export const todoStateSelector = (state: RootState) => state.todo
