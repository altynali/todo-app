import { AxiosError } from 'axios'

export interface AppState {
    error: AxiosError | null
    isLoading: boolean
}

export enum AppActionEnum {
    SET_IS_LOADING = 'SET_IS_LOADING',
    SET_ERROR = 'SET_ERROR',
}

export interface SetErrorAction {
    type: AppActionEnum.SET_ERROR
    payload: AxiosError
}

export interface SetIsLoadingAction {
    type: AppActionEnum.SET_IS_LOADING
    payload: boolean
}

export type AppAction = SetErrorAction | SetIsLoadingAction
