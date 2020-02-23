import { Injectable } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { getEmployee } from './employee/employe.action';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { createReducer, Action, on, createAction, props, State } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class EmployeeEffect {

  loadEmployee$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(getEmployee.type),
      mergeMap(() => this.employeeService.getEmployee().pipe(
        map(employee => {
          return getEmployeeSuccess(employee);
        })
      ))


    )
  );
  constructor(private actions$: Actions, private employeeService: EmployeeService) {


  }
}
const getEmployeeSuccess = createAction('getemployee', props<{ data: any }>());

const reducer = createReducer(null,
  on(getEmployeeSuccess, (state, { data }) => {
    return data;
  })
);
export function employeeReducer(state, action) {
  return reducer(state, action);
}