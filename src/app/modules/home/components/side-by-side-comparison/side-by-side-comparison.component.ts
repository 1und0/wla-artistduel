import { Component, Output, EventEmitter } from '@angular/core';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';

@Component({
  selector: 'side-by-side-comparsion',
  templateUrl: './side-by-side-comparsion.component.html',
  styleUrls: ['./side-by-side-comparsion.component.css']
})
export class SideBySideComparsonComponent {

  leftSearchValue: string ='';
  rightSearchValue: string ='';
  leftSearchResults: any[] = [];
  rightSearchResults: any[] = [];
  leftArtist: any = '';
  rightArtist: any = '';

  @Output() emitter = new EventEmitter();

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    ) { }



  searchLeft() {
    if (this.leftSearchValue.length > 1) {
      this.apiHttpService
      .get(this.apiEndpointsService.getArtistByName(this.leftSearchValue, '13'))
      .subscribe(
        response => {
          this.leftSearchResults = response.results.artistmatches.artist;
        });
    }

  }

  searchRight() {
    if (this.rightSearchValue.length > 1) {
      this.apiHttpService
      .get(this.apiEndpointsService.getArtistByName(this.rightSearchValue, '13'))
      .subscribe(
        response => {
          this.rightSearchResults = response.results.artistmatches.artist;
        });
    }
  }

  loadRightArtist(id: string) {
    this.apiHttpService
    .get(this.apiEndpointsService.getArtistByID(id))
    .subscribe(
      response => {
        this.rightArtist = response.artist;
        this.rightSearchResults = [];
        this.emitter.emit(this.rightSearchResults);
      });
  }

  loadLeftArtist(id: string) {
    this.apiHttpService
    .get(this.apiEndpointsService.getArtistByID(id))
    .subscribe(
      response => {
        this.leftArtist = response.artist;
        this.leftSearchResults = [];
        this.emitter.emit(this.leftSearchResults);
      });
  }
}
