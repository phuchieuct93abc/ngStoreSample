import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../employee.service';
import { Store, select } from '@ngrx/store';
import { getEmployee } from './employe.action';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employee: any;
  constructor(private store: Store<{ employee: any }>) { }

  ngOnInit() {
    this.store.pipe(select('employee')).subscribe(v => {
      console.log(v);
      this.employee = v;
    });

    this.store.dispatch(getEmployee({ id: 2 }));
  }

}
