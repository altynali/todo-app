import { TodoType } from '../../../../components/shared/types'

export interface TodoState {
    todos: TodoType[]
}

export enum TodoActionEnum {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
}

export interface AddTodoAction {
    type: TodoActionEnum.ADD_TODO
    payload: TodoType
}

export interface DeleteTodoAction {
    type: TodoActionEnum.DELETE_TODO
    payload: string
}

export type TodoAction = AddTodoAction | DeleteTodoAction
