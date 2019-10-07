import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementDetailComponent } from './advertisement-detail/advertisement-detail.component';
import { AdvertisementPostingComponent } from './advertisement-posting/advertisement-posting.component';


const routes: Routes = [
  { path: "post/advertisement", component: AdvertisementPostingComponent },
  { path: "advertisements/:id", component: AdvertisementDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
