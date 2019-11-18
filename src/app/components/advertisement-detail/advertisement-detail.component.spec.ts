import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { AdvertisementDetailComponent } from './advertisement-detail.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('AdvertisementDetailComponent', () => {
  let component: AdvertisementDetailComponent;
  let fixture: ComponentFixture<AdvertisementDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, AppRoutingModule],
      declarations: [ AdvertisementDetailComponent ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(AdvertisementDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  /*
  calls api
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  */
});
