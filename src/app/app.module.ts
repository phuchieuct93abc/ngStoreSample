import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnswerComponent } from './component/answer/answer.component';
import { QuestionComponent } from './component/question/question.component';
import { AppStoreModule } from './store/store.module';

@NgModule({
  declarations: [
    AppComponent,
    AnswerComponent,
    QuestionComponent,
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppStoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
