import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';
import { SearchValueService } from "src/app/core/services/searchvalue.service";

@Component ({
  selector: 'artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.css'],
})


export class ArtistSearchComponent {

  public searchValue = '';
  artists: any[] = [];
  infoIsLoaded = false;

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    private activatedRoute: ActivatedRoute,
    private searchValueService: SearchValueService
    ) {
      this.searchValueService.searchValue$.subscribe((data) => {
        this.searchValue = data;
        this.getArtists(data);
      })
      }

      getArtists(searchterm: string) {
        //catch sub 3 character search terms
        if (searchterm.length > 1) {
          this.apiHttpService
          .get(this.apiEndpointsService.getArtistByName(searchterm, '13'))
          .subscribe(
            response => {
              this.artists = response.results.artistmatches.artist;
              this.infoIsLoaded =true;
            });
        }
  }




}
