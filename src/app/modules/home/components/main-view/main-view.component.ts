import { Component, } from "@angular/core";
import { Country } from "src/app/shared/models/country.model";
import { Artist } from "src/app/shared/models/artist.model";
import { AppComponent } from "src/app/app.component";
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';

@Component ({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
})



export class MainViewComponent {
  artists: any[] = [];

  countries: Country[] =[
    {iso3166: 'germany', countryname: 'Deutschland'},
    {iso3166: 'spain', countryname: 'Spanien'},
    {iso3166: 'cuba', countryname: 'Cuba'}
  ];

  preselectedOption = this.countries[0];

  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService) {
    this.onCountrySelection(this.preselectedOption.iso3166);
  }

  onCountrySelection(cid: string) {
    this.apiHttpService
        .get(this.apiEndpointsService.getTopArtistsByCountry(cid,'10'))
        .subscribe(response => this.artists = response.topartists.artist);
  }

}

