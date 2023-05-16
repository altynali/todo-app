import { RootState } from '../../rootReducer'
import { AppState, AppAction, AppActionEnum } from './actions/types'

const initialState: AppState = {
    isLoading: false,
    error: null,
}

export default function appReducer(state = initialState, action: AppAction): AppState {
    switch (action.type) {
        case AppActionEnum.SET_ERROR:
            return { ...state, error: action.payload }
        case AppActionEnum.SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        default:
            return state
    }
}

export const appStateSelector = (state: RootState) => state.app
