import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Advertisement } from '../models/advertisement';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

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