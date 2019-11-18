import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatInputModule} from '@angular/material/input';

import {MatCheckboxModule} from '@angular/material/checkbox';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import {MatIconModule} from '@angular/material/icon';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { AdvertisementDetailComponent } from './components/advertisement-detail/advertisement-detail.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { AdvertisementPostingComponent } from './components/advertisement-posting/advertisement-posting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    AppComponent,
    AdvertisementDetailComponent,
    TopMenuComponent,
    AdvertisementPostingComponent
  ],
  imports: [
    BsDropdownModule,
    TooltipModule,
    ModalModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
