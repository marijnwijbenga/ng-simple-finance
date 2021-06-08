import {Component, OnInit} from '@angular/core';
import {PageComponent} from '../../layout/page/page.component';
import {HeadingComponent} from '../../layout/heading/heading.component';
import {SectionWrapperComponent} from '../../layout/section-wrapper/section-wrapper.component';
import {FooterWrapperComponent} from '../../layout/footer-wrapper/footer-wrapper.component';
import {IncomeService} from '../../services/income-service.service';
import {Transaction} from '../../interfaces/transaction';
import {ExpenditureService} from '../../services/expenditure-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  incomes: Transaction[]
  expenditures: Transaction[]
  showModal: boolean
  constructor(
    private incomeService: IncomeService,
    private expenditureService: ExpenditureService
  ) {

  }

  ngOnInit(): void {
    this.getIncomes()
    this.getExpenditures()
  }

  getIncomes(): void {
    this.incomeService.getIncomes()
      .subscribe(incomes => this.incomes = incomes)
  }

  getExpenditures(): void {
    this.expenditureService.getExpenditures()
      .subscribe(expenditures => this.expenditures = expenditures)
  }

}
