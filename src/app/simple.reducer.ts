import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'helloworld', action: Action) {
    console.log(action.type)
    switch (action.type) {
        case 'Spanish':
            return state = 'hola mundo'
        case 'french':
            return state = 'binjor'
    }
}