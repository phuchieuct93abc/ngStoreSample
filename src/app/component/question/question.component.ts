import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { answer } from '../../store/question.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  favorite: string;
  gender: string;
  car: boolean;
  @ViewChild('form', { static: true })
  form: NgForm;
  constructor(private store: Store<{ answer: {} }>) { }

  ngOnInit() {
  }

  submit() {
    this.store.dispatch(answer(this.form.form.value));
  }
}
