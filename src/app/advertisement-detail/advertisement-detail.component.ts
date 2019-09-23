import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../models/advertisement';
import { AdvertisementDetailService } from './advertisement-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advertisement-detail',
  templateUrl: './advertisement-detail.component.html',
  styleUrls: ['./advertisement-detail.component.css']
})
export class AdvertisementDetailComponent implements OnInit {

 advertisement: Advertisement;

  constructor(
    private advertisementDetailService: AdvertisementDetailService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id: number = parseInt(params.get("id"));
      this.advertisementDetailService
      .getAdvertisementResponse(id)
      .subscribe(a => {
        this.advertisement = a;
      })
    });
    
  }

}
