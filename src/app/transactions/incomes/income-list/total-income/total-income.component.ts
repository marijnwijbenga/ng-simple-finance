import { Component, OnInit, Input, Output } from '@angular/core';
import {Transaction} from '../../../../interfaces/transaction';

@Component({
  selector: 'app-total-income',
  templateUrl: './total-income.component.html',
  styleUrls: ['./total-income.component.scss']
})
export class TotalIncomeComponent implements OnInit {
  @Input() incomes!: Transaction[];


  calculateTotalIncome(): number {
    return this.incomes.reduce((t, { amount }) => t + amount, 0)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
