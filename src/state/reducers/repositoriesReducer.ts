import { ActionTypeConstants } from '../action-type-constants'
import { Action } from '../actionType'
interface RepositoriesState {
    loading: boolean
    error: string | null
    data: string[]
}

const initialState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (
    state: RepositoriesState = initialState,
    action: Action
): RepositoriesState => {
    switch (action.type) {
        case ActionTypeConstants.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionTypeConstants.SEARCH_REPOSITORIES_SUCCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionTypeConstants.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state
    }
}

export default reducer