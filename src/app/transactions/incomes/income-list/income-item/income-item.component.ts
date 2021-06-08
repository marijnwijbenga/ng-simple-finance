import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../../../interfaces/transaction';


@Component({
  selector: 'app-income-item',
  templateUrl: './income-item.component.html',
  styleUrls: ['./income-item.component.scss']
})
export class IncomeItemComponent implements OnInit {
  @Input() incomes!: Transaction[];
  constructor() {

  }

  ngOnInit(): void {

  }


}
