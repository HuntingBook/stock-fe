import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImportExcelComponent } from './containers/import-excel/import-excel.component';
import { ManageCompaniesComponent } from './containers/manage-companies/manage-companies.component';
import { ManageIPOComponent } from './containers/manage-ipo/manage-ipo.component';
import { ManageStockExchangesComponent } from './containers/manage-stock-exchanges/manage-stock-exchanges.component';
import { CreateCompanyComponent } from './containers/create-company/create-company.component';
import { ComparisonChartsComponent } from './containers/comparison-charts/comparison-charts.component';
import { UserLoginComponent } from './containers/user-login/user-login.component';
import { UserSignupComponent } from './containers/user-signup/user-signup.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HeaderComponent } from './widgets/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ImportExcelComponent,
    ManageCompaniesComponent,
    ManageIPOComponent,
    ManageStockExchangesComponent,
    CreateCompanyComponent,
    ComparisonChartsComponent,
    UserLoginComponent,
    UserSignupComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TabsModule.forRoot(),
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
