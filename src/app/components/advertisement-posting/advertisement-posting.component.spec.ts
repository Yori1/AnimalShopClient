import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPostingComponent } from './advertisement-posting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('AdvertisementPostingComponent', () => {
  let component: AdvertisementPostingComponent;
  let fixture: ComponentFixture<AdvertisementPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule],
      declarations: [ AdvertisementPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


});
