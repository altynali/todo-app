import { TodoActionEnum, AddTodoAction, DeleteTodoAction } from './types'
import { TodoType } from '../../../../components/shared/types'

export const TodoActionCreators = {
    addTodo: (todo: TodoType): AddTodoAction => ({
        type: TodoActionEnum.ADD_TODO,
        payload: todo,
    }),
    deleteTodo: (id: number): DeleteTodoAction => ({
        type: TodoActionEnum.DELETE_TODO,
        payload: id,
    }),
}
