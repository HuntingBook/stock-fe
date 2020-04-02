import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'stock-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navs: any = [{
    title: "Import Data",
    link: "/import-excel"
  }, {
    title: "Manage Companies",
    link: "/manage-companies"
  }, {
    title: "Manage IPO",
    link: "/manage-ipo"
  }, {
    title: "Manage Stock Exchanges",
    link: "/manage-stock-exchanges"
  }, {
    title: "Comparison Charts",
    link: "/comparision-charts"
  }];
  selected: number = 1;
  hasHeader: boolean = false;
  routerSub: Subscription;
  constructor(private router: Router) {
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.hasHeader = this.navs.some((nav, index) => {
          if (nav.link === event.url) {
            this.selected = index + 1;
            return true;
          }
        })
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

}
