import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { ApiHttpService } from 'src/app/core/services/api-http.service';
import { ApiEndpointsService } from 'src/app/core/services/api-endpoints.service';

@Component ({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css'],
})

export class DetailViewComponent {
  artist: any = '';
  albums: any[] = [];
  tracks: any[] = [];
  id: string = '';
  infoIsLoaded: boolean = false;
  albumsIsLoaded: boolean = false;
  tracksIsLoaded: boolean = false;


  constructor(
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService,
    private activatedRoute: ActivatedRoute) {
      this.activatedRoute.queryParams.subscribe(
        params => {this.id = params.id;}
      );
      this.getArtistInfo(this.id);

  }

  ngOnInit(): void {
    this.getArtistInfo(this.id);
    this.getTopFiveAlbums(this.id);
    this.getTopFiveTracks(this.id);
  }

  getArtistInfo(id: string) {
    this.apiHttpService
    .get(this.apiEndpointsService.getArtistByID(id))
    .subscribe(
      response => {
        this.artist = response.artist;;
        this.infoIsLoaded =true;
      });
  }

  getTopFiveAlbums(id: string) {
    this.apiHttpService
    .get(this.apiEndpointsService.getArtistTopFiveAlbums(id))
    .subscribe(
      response => {
        this.albums = response.topalbums.album;
        this.albumsIsLoaded =true;
      });
  }

  getTopFiveTracks(id: string) {
    this.apiHttpService
    .get(this.apiEndpointsService.getArtistTopFiveTracks(id))
    .subscribe(
      response => {
        this.tracks = response.toptracks.track;
        this.tracksIsLoaded =true;
      });
  }

}
