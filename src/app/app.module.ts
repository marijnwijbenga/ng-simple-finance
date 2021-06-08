import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageComponent } from './layout/page/page.component';
import { HeadingComponent } from './layout/heading/heading.component';
import { SectionWrapperComponent } from './layout/section-wrapper/section-wrapper.component';
import { FooterWrapperComponent } from './layout/footer-wrapper/footer-wrapper.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { BalanceTotalComponent } from './transactions/balance-total/balance-total.component';
import { IncomeListComponent } from './transactions/incomes/income-list/income-list.component';
import { TotalIncomeComponent } from './transactions/incomes/income-list/total-income/total-income.component';
import { AddIncomeComponent } from './transactions/incomes/income-list/add-income/add-income.component';
import { IncomeItemComponent } from './transactions/incomes/income-list/income-item/income-item.component';
import { ExpenditureListComponent } from './transactions/expenditures/expenditure-list/expenditure-list.component';
import { TotalExpendituresComponent } from './transactions/expenditures/expenditure-list/total-expenditures/total-expenditures.component';
import { AddExpenditureComponent } from './transactions/expenditures/expenditure-list/add-expenditure/add-expenditure.component';
import { ExpenditureItemComponent } from './transactions/expenditures/expenditure-list/expenditure-item/expenditure-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HeadingComponent,
    SectionWrapperComponent,
    FooterWrapperComponent,
    DashboardComponent,
    BalanceTotalComponent,
    IncomeListComponent,
    TotalIncomeComponent,
    AddIncomeComponent,
    IncomeItemComponent,
    ExpenditureListComponent,
    TotalExpendituresComponent,
    AddExpenditureComponent,
    ExpenditureItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
