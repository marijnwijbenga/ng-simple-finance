import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Transaction} from '../interfaces/transaction';
import {INCOMES} from '../constants/INCOMES';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  constructor() { }

  getIncomes(): Observable<Transaction[]> {
    return of(INCOMES);
  }

  addIncome(name, amount, created) {
    return INCOMES.push({
      "name": name,
      "amount": amount,
      "created" : created
    })
  }

}
