import { AxiosError } from 'axios'
import { SetErrorAction, AppActionEnum, SetIsLoadingAction } from './types'

export const AppActionCreators = {
    setError: (err: AxiosError): SetErrorAction => ({
        type: AppActionEnum.SET_ERROR,
        payload: err,
    }),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({
        type: AppActionEnum.SET_IS_LOADING,
        payload: isLoading,
    }),
}
