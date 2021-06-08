import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../../../interfaces/transaction';
import {IncomeService} from '../../../../services/income-service.service';
import {INCOMES} from '../../../../constants/INCOMES';

@Component({
  selector: 'app-add-income',
  templateUrl: './add-income.component.html',
  styleUrls: ['./add-income.component.scss']
})
export class AddIncomeComponent implements OnInit {

  showModal: boolean = false;
  income: Transaction;
  name: String;
  amount: number;


  constructor(private incomeService: IncomeService) {
  }

  addIncome() {
    this.incomeService.addIncome(this.name, this.amount, (new Date()))
    console.log(INCOMES)
    this.name = ''
    this.amount = null
  }

  ngOnInit(): void {

  }

}
