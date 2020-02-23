import { createAction, props } from '@ngrx/store';
export const getEmployee = createAction('[Employee id] Get employee', props<{ id: number }>());
