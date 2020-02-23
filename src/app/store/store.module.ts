import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { questionReducer } from './question.reducer';
import { employeeReducer } from '../employee.effect';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      answer: questionReducer,
       employee: employeeReducer
    })
  ]
})
export class AppStoreModule { }
