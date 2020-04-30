import { Component } from '@angular/core';

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
  },  {
    title: "Manage Company",
    link: "/manage-companies"
  }, {
    title: "Manage Stock Exchange",
    link: "/manage-stock-exchanges"
  },{
    title: "Update IPO Details",
    link: "/manage-ipo"
  }, {
    title: "Compare Company",
    link: "/comparision-charts"
  }];
}
