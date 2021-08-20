import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './modules/home/components/detail-view/detail-view.component';
import { MainViewComponent } from './modules/home/components/main-view/main-view.component';
import { ArtistSearchComponent } from './modules/home/components/artist-search/artist-search.component';
import { SideBySideComparsonComponent } from './modules/home/components/side-by-side-comparison/side-by-side-comparison.component';


const routes: Routes = [
  {path: 'search', component: ArtistSearchComponent},
  {path: 'detail', component: DetailViewComponent},
  {path: 'compare', component: SideBySideComparsonComponent},
  {path: '', component: MainViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {



}
