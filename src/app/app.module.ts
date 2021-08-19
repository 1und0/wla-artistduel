//Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';



//Custom
import { ApiEndpointsService } from './core/services/api-endpoints.service';
import { ApiHttpService } from './core/services/api-http.service';
import { Constants } from './config/constants';
import { HeaderComponent } from './modules/home/components/header/header.component';
import { ArtistSearchComponent } from './modules/home/components/artist-search/artist-search.component';
import { DetailViewComponent } from './modules/home/components/detail-view/detail-view.component';
import { MainViewComponent } from './modules/home/components/main-view/main-view.component';
import { SearchValueService } from './core/services/searchvalue.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailViewComponent,
    MainViewComponent,
    ArtistSearchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatFormFieldModule,
    MatListModule,
    MatCardModule,
    MatIconModule

  ],
  providers: [
    ApiHttpService,
    ApiEndpointsService,
    Constants,
    SearchValueService
  ],
  bootstrap: [
    AppComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
