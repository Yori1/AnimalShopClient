import { Component, OnInit } from '@angular/core';
import { AnimalDetailService } from './animal-detail.service';
import { Animal } from 'src/app/models/animal';


@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  private animal: Animal;

  constructor(
    private animalDetailService: AnimalDetailService
  ) { 
    
  }

  ngOnInit() {

  }

}
