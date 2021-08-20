import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { SearchValueService } from "src/app/core/services/searchvalue.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  public searchvalue: string = '';

  @ViewChild('backhome') test!: ElementRef;

  constructor(
    private router:Router,
    private searchValueService: SearchValueService,
    private element: ElementRef,
    ) {}

  ngAfterViewInit() {
    this.router.events
      .subscribe(
        (event: NavigationEvent) => {
          if(event instanceof NavigationEnd) {
            console.log(this.test);
            if (event.url!="/") {
              this.test.nativeElement.firstChild.textContent='❮❮ Back';
            }
            else {
              this.test.nativeElement.firstChild.textContent='wla-meets-lastfm';
            }
          }
        });
  }

  onChange() {
    //catch routing to self
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
