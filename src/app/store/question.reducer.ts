import { createReducer, on } from '@ngrx/store';
import { answer } from './question.actions';

const initialState = {};
const reducer = createReducer(initialState,
    on(answer, (state, prop) => {
        return { ...state, ...prop };
    })

);

export function questionReducer(state, action) {
    return reducer(state, action);
}
