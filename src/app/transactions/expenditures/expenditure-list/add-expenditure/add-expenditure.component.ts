import {Component, Input, OnInit} from '@angular/core';
import {Transaction} from '../../../../interfaces/transaction';
import {EXPENDITURES} from '../../../../constants/EXPENDITURES';
import {ExpenditureService} from '../../../../services/expenditure-service.service';

@Component({
  selector: 'app-add-expenditure',
  templateUrl: './add-expenditure.component.html',
  styleUrls: ['./add-expenditure.component.scss']
})
export class AddExpenditureComponent implements OnInit {

  @Input() showModal: boolean;
  expenditure: Transaction;
  name: String;
  amount: number;


  constructor(private expenditureService: ExpenditureService) {
  }

  addExpenditure() {
    this.expenditureService.addExpenditure(this.name, this.amount, (new Date()))
    console.log(EXPENDITURES)
    this.name = ''
    this.amount = null
  }

  ngOnInit(): void {

  }

}
