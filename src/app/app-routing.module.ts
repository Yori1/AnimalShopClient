import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementDetailComponent } from './advertisement-detail/advertisement-detail.component';
import { AnimalDetailComponent } from './advertisement-detail/animal-detail/animal-detail.component';


const routes: Routes = [
  { path: "animals", component: AnimalDetailComponent },
  { path: "advertisements/:id", component: AdvertisementDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
