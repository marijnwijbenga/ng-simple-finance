import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../interfaces/transaction';

@Component({
  selector: 'app-balance-total',
  templateUrl: './balance-total.component.html',
  styleUrls: ['./balance-total.component.scss']
})
export class BalanceTotalComponent implements OnInit {
  @Input() incomes: Transaction[]
  @Input() expenditures: Transaction[]

  // dit herschrijven met output vanuit de balance-income en balance-expenditures components

  calculateTotalIncome(): number {
    return this.incomes.reduce((t, { amount }) => t + amount, 0)

  }

  calculateTotalExpenditures(): number {
    return this.expenditures.reduce((t, { amount }) => t + amount, 0)
  }

  totalBalance(): number {
   return this.calculateTotalIncome() - this.calculateTotalExpenditures()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
