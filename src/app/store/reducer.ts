import { DataActionTypes, DataActions } from './action';

export let initialState = []

export function reducer(state = initialState, action: DataActions) {
        switch (action.type) {
        case DataActionTypes.POST_DATA:
            return [...state, action.payload]
        case DataActionTypes.GET_DATA:
            return state;
        default:
            return state    
    }
} 