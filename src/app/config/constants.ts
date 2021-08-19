// Angular Modules
import { Injectable } from '@angular/core';
@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'http://ws.audioscrobbler.com/2.0';
    public readonly API_KEY: string = 'YOUR_API_KEY';
}
