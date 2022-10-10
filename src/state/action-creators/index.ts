import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypeConstants } from "../action-type-constants";
import { Action } from "../actionType";

export const searchRepositories = (term: string) => {
    return async (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionTypeConstants.SEARCH_REPOSITORIES
        })

        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            })
            const matchedRepositoryNames = data.objects.map((repositoryObject: any) => {
                return repositoryObject.package.name
            })

            dispatch({
                type: ActionTypeConstants.SEARCH_REPOSITORIES_SUCCESS,
                payload: matchedRepositoryNames
            })
        } catch (throwArg) {
            if (throwArg instanceof Error) {
                dispatch({
                    type: ActionTypeConstants.SEARCH_REPOSITORIES_ERROR,
                    payload: throwArg.message
                })
            }
        }
    }
}