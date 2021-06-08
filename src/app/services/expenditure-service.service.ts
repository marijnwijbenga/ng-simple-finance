import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Transaction} from '../interfaces/transaction';

import {EXPENDITURES} from '../constants/EXPENDITURES';

@Injectable({
  providedIn: 'root'
})
export class ExpenditureService {

  constructor() { }

  getExpenditures(): Observable<Transaction[]> {
    return of(EXPENDITURES);
  }

  addExpenditure(name, amount, created) {
    return EXPENDITURES.push({
      "name": name,
      "amount": amount,
      "created" : created
    })
  }

}
