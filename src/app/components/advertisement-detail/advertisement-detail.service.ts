import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Advertisement } from 'src/app/models/advertisement';

@Injectable ({
    providedIn: "root"
})
export class AdvertisementDetailService {

    constructor(
        private http: HttpClient
    ){}

    getAdvertisementResponse(id: number): Observable<Advertisement> {
        return this.http.get<Advertisement>(environment.baseApi + "/advertisements/" + id);
    }
}
