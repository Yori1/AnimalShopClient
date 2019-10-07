import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisementPostingComponent } from './advertisement-posting.component';

describe('AdvertisementPostingComponent', () => {
  let component: AdvertisementPostingComponent;
  let fixture: ComponentFixture<AdvertisementPostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertisementPostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertisementPostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
