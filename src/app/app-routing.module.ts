import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvertisementPostingComponent } from './components/advertisement-posting/advertisement-posting.component';
import { AdvertisementDetailComponent } from './components/advertisement-detail/advertisement-detail.component';



const routes: Routes = [
  { path: "post/advertisement", component: AdvertisementPostingComponent },
  { path: "advertisements/:id", component: AdvertisementDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
