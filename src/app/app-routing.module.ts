import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailViewComponent } from './modules/home/components/detail-view/detail-view.component';
import { MainViewComponent } from './modules/home/components/main-view/main-view.component';


const routes: Routes = [
  {path: 'detail', component: DetailViewComponent},
  {path: '', component: MainViewComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
