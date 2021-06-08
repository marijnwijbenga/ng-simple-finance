import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Transaction} from '../../../../interfaces/transaction';

@Component({
  selector: 'app-expenditure-item',
  templateUrl: './expenditure-item.component.html',
  styleUrls: ['./expenditure-item.component.scss']
})
export class ExpenditureItemComponent implements OnInit {
  @Input() expenditures: Transaction[] = [];
  @Output() showModal = new EventEmitter()



  constructor() { }

  editExpenditure() {
    this.showModal.emit(this.showModal)
  }

  ngOnInit(): void {
  }

}
