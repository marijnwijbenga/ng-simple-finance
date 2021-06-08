import { Component, OnInit, Input } from '@angular/core';
import {IncomeService} from '../../../services/income-service.service';
import {Transaction} from '../../../interfaces/transaction';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.scss']
})
export class IncomeListComponent implements OnInit {
  @Input() incomeList: Transaction

  constructor(private incomeService: IncomeService) {

  }
  incomes: Transaction[] = []
  ngOnInit(): void {
    this.getIncomes()
  }
  getIncomes(): void {
    this.incomeService.getIncomes()
      .subscribe(incomes => this.incomes = incomes)
  }

}
