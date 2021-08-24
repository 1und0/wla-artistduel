import { Component, OnInit, } from "@angular/core";
import { Country } from "src/app/shared/classes/models/country.model";
import { Artist } from "src/app/shared/classes/models/artist.model";
import { AppComponent } from "src/app/app.component";
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';

@Component ({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css'],
})

export class MainViewComponent implements OnInit {
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
  }

  ngOnInit() {
    this.onCountrySelection(this.preselectedOption.iso3166);

  }

  onCountrySelection(cid: string) {
    this.apiHttpService
        .get(this.apiEndpointsService.getTopArtistsByCountry(cid,'10'))
        .subscribe(response => this.artists = response.topartists.artist);
  }

}

