import { Component } from '@angular/core';
import { ApiHttpService } from './core/services/api-http.service';
import { ApiEndpointsService } from './core/services/api-endpoints.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wla-artistduel';

  constructor(
    // Application Services
    private apiHttpService: ApiHttpService,
    private apiEndpointsService: ApiEndpointsService
  ) { }


  ngOnInit() {

  }
}

