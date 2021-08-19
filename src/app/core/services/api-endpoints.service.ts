// Angular Modules
import { Injectable } from '@angular/core';
// Application Classes
import { UrlBuilder } from '../../shared/classes/url-builder';
import { QueryStringParameters } from '../../shared/classes/query-string-parameters';
// Application Constants
import { Constants } from 'src/app/config/constants';


@Injectable()
export class ApiEndpointsService {
  constructor(


    // Application Constants
    private constants: Constants
  ) { }

  // URL
  private createUrl(
    action: string
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    return urlBuilder.toString();
  }

  // URL WITH QUERY PARAMS
  private createUrlWithQueryParameters(
    action: string,
    queryStringHandler?:
      (queryStringParameters: QueryStringParameters) => void
  ): string {
    const urlBuilder: UrlBuilder = new UrlBuilder(
      this.constants.API_ENDPOINT,
      action
    );
    // Push extra query string params
    if (queryStringHandler) {
      queryStringHandler(urlBuilder.queryString);
    }
    return urlBuilder.toString();
  }

  public getTest(){
    return 'https://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=5c6b44a212f94d81da6aded8014d9b4d&format=json'
  }

  public getBuiltTest(
    method: string,
    format: string
  ): string {
    return this.createUrlWithQueryParameters('',
      (qs: QueryStringParameters) => {
        qs.push('api_key', this.constants.API_KEY )
        qs.push('method', method);
        qs.push('format', format);
      }
    );
  }

  public getArtistByID(
    mbid: string,
  ): string {
    return this.createUrlWithQueryParameters('',
      (qs: QueryStringParameters) => {
        qs.push('api_key', this.constants.API_KEY )
        qs.push('method', 'artist.getInfo');
        qs.push('format', 'json');
        qs.push('mbid', mbid);
      }
    );
  }

  public getArtistTopFiveTracks(
    mbid: string,
  ): string {
    return this.createUrlWithQueryParameters('',
      (qs: QueryStringParameters) => {
        qs.push('api_key', this.constants.API_KEY )
        qs.push('method', 'artist.getTopTracks');
        qs.push('format', 'json');
        qs.push('mbid', mbid);
        qs.push('limit', '5');
      }
    );
  }

  public getArtistTopFiveAlbums(
    mbid: string,
  ): string {
    return this.createUrlWithQueryParameters('',
      (qs: QueryStringParameters) => {
        qs.push('api_key', this.constants.API_KEY )
        qs.push('method', 'artist.getTopAlbums');
        qs.push('format', 'json');
        qs.push('mbid', mbid);
        qs.push('limit', '5');
      }
    );
  }


  public getArtistByName(
    artist: string,
    limit: string,
  ): string {
    return this.createUrlWithQueryParameters('',
      (qs: QueryStringParameters) => {
        qs.push('api_key', this.constants.API_KEY )
        qs.push('method', 'artist.search');
        qs.push('format', 'json');
        qs.push('artist', artist);
        qs.push('limit', limit);
      }
    );
  }


  public getTopArtistsByCountry(
    country: string,
    limit: string,
  ): string {
    return this.createUrlWithQueryParameters('',
      (qs: QueryStringParameters) => {
        qs.push('api_key', this.constants.API_KEY )
        qs.push('method', 'geo.getTopArtists');
        qs.push('format', 'json');
        qs.push('country', country);
        qs.push('limit', limit);
      }
    );
  }

}
