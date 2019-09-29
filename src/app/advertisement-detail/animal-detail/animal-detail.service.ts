import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable} from '@angular/core';
import { Advertisement } from 'src/app/models/advertisement';

@Injectable ({
    providedIn: "root"
})
export class AnimalDetailService {

    constructor(
        private http: HttpClient
    ){}

    getAnimalResponse(id: number) {
        return this.http.get<Advertisement>(environment.baseApi + "/" + id);
    }
}