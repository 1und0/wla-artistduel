import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './modules/home/components/detail-view/detail-view.component';
import { MainViewComponent } from './modules/home/components/main-view/main-view.component';
import { ArtistSearchComponent } from './modules/home/components/artist-search/artist-search.component';


const routes: Routes = [
  {path: 'search', component: ArtistSearchComponent},
  {path: 'detail', component: DetailViewComponent},
  {path: '', component: MainViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {



}
