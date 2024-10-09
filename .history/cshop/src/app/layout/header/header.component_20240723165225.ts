import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    console.log('url: ', route);

  }

  onTabChange(route: any){
    console.log("route: ", route)
    // this.router.navigate([route.tab.textLabel]);
     this.router.navigate(["category"]);
  }
}
