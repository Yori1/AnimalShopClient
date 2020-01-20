import { Component, OnInit } from '@angular/core';
import { AdvertisementPostingService } from './advertisement-posting.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AbstractWebDriver } from 'protractor/built/browser';
import { Advertisement } from 'src/app/models/advertisement';
import { Animal } from 'src/app/models/animal';
import { AdvertisementPostingRequest } from './advertisement.posting.model';

@Component({
  selector: 'app-advertisement-posting',
  templateUrl: './advertisement-posting.component.html',
  styleUrls: ['./advertisement-posting.component.css']
})
export class AdvertisementPostingComponent implements OnInit {

  public formGroup: FormGroup;

  constructor(public advertisementPostingService: AdvertisementPostingService, private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      name: [''],
      price: [''],
      description: [''],
      kind: ['']

    })
  }

  onSubmit() {
    let objectToPost: AdvertisementPostingRequest = this.formGroup.value;
    this.formGroup.value.id = 1;
    console.log(JSON.stringify(this.formGroup.value));
    this.advertisementPostingService.postAdvertisement(objectToPost).subscribe(r => console.log(r.locationAdvertisement));

  }

  ngOnInit() {
  }

  changeKind(e) {
    this.formGroup.setValue(e.target.value, {
      onlySelf: true
    });
  }
}
