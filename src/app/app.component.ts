import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stock-fe';
  navs: any = [{
    title: "Import Data",
    link: "/import-excel"
  }, {
    title: "Manage Company",
    link: "/manage-companies"
  }, {
    title: "Manage Stock Exchange",
    link: "/manage-stock-exchanges"
  }, {
    title: "Update IPO Details",
    link: "/manage-ipo"
  }, {
    title: "Compare Company",
    link: "/comparision-charts"
  }];

  constructor(private router: Router) { }

  onLogout() {
    this.router.navigateByUrl("login");
  }
}
