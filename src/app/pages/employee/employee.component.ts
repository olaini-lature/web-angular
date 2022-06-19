import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation, } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
