import { ActionTypeConstants } from "../action-type-constants"

interface SearchRepositoriesAction {
    type: ActionTypeConstants.SEARCH_REPOSITORIES
}

interface SearchRepositoriesSuccessAction {
    type: ActionTypeConstants.SEARCH_REPOSITORIES_SUCCESS
    payload: string[]
}

interface SearchRepositoriesErrorAction {
    type: ActionTypeConstants.SEARCH_REPOSITORIES_ERROR
    payload: string
}

export type Action =
    | SearchRepositoriesAction
    | SearchRepositoriesSuccessAction
    | SearchRepositoriesErrorAction