import { Injectable } from '@angular/core';
import { Advertisement } from 'src/app/models/advertisement';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AdvertisementPostResult } from 'src/app/models/communication/advertisement.post.result';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdvertisementPostingService {
  constructor(private httpClient: HttpClient){}


  public postAdvertisement(advertisement: Advertisement): Observable<AdvertisementPostResult> {
    return this.httpClient.post<AdvertisementPostResult>(environment.baseApi + "/advertisements", advertisement)
  }
}
