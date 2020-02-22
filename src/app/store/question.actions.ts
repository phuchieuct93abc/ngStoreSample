import { createAction, props } from '@ngrx/store';

export const answer = createAction('answer', props<{}>());
