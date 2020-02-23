import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerComponent } from './component/answer/answer.component';
import { QuestionComponent } from './component/question/question.component';
import { AppStoreModule } from './store/store.module';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { EmployeeEffect } from './employee.effect';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppStoreModule,
    HttpClientModule,
    EffectsModule.forRoot([EmployeeEffect])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
