import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { questionReducer } from './question.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({
      answer: questionReducer
    })
  ]
})
export class AppStoreModule { }
