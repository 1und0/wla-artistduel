import { Component } from "@angular/core";
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { SearchValueService } from "src/app/core/services/searchvalue.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.html']
})

export class HeaderComponent {

  public searchvalue: string = '';


  constructor(
    private router:Router,
    private searchValueService: SearchValueService
    ) {

  }

  onChange() {
    if (this.router.url != '/search') {
      this.router.navigateByUrl('/search').then(e => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    }

    this.searchValueService.searchValue(this.searchvalue);
  }
}
