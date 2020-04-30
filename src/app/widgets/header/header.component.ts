import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'stock-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() navs:any;
  selected: number = 1;
  hasHeader: boolean = false;
  routerSub: Subscription;
  constructor(private router: Router) {
    this.routerSub = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if(event.url === "/"){
          this.selected = 2;
          this.hasHeader = true;
        } else {
          this.hasHeader = this.navs.some((nav, index) => {
            if (nav.link === event.url) {
              this.selected = index + 1;
              return true;
            }
          });
        }
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }

}
