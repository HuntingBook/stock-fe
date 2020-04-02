import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImportExcelComponent } from './containers/import-excel/import-excel.component';
import { ManageCompaniesComponent } from './containers/manage-companies/manage-companies.component';
import { ManageIPOComponent } from './containers/manage-ipo/manage-ipo.component';
import { ManageStockExchangesComponent } from './containers/manage-stock-exchanges/manage-stock-exchanges.component';
import { CreateCompanyComponent } from './containers/create-company/create-company.component';
import { ComparisonChartsComponent } from './containers/comparison-charts/comparison-charts.component';
import { UserLoginComponent } from './containers/user-login/user-login.component';
import { UserSignupComponent } from './containers/user-signup/user-signup.component';


const routes: Routes = [
  { path: '', redirectTo: 'manage-companies', pathMatch: 'full' },
  { path: 'import-excel', component: ImportExcelComponent },
  { path: 'manage-companies', component: ManageCompaniesComponent },
  { path: 'manage-ipo', component: ManageIPOComponent },
  { path: 'manage-stock-exchanges', component: ManageStockExchangesComponent },
  { path: 'create-company', component: CreateCompanyComponent },
  { path: 'comparision-charts', component: ComparisonChartsComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignupComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
