import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  $answers: {};
  constructor(private store: Store<{ answer: {} }>) { }

  ngOnInit() {
    this.$answers = this.store.pipe(select('answer'));
  }

}
