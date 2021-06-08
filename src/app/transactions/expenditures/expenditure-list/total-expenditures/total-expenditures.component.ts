import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../../../interfaces/transaction';

@Component({
  selector: 'app-total-expenditures',
  templateUrl: './total-expenditures.component.html',
  styleUrls: ['./total-expenditures.component.scss']
})
export class TotalExpendituresComponent implements OnInit {

  @Input() expenditures: Transaction[]

  constructor() { }

  calculateTotalExpenditures(): number {
    return this.expenditures.reduce((t, { amount }) => t + amount, 0)

  }
  ngOnInit(): void {
  }





}
