import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";

@Injectable()
export class TagService {
    constructor(private http: HttpClient) { }
    
    postTag(value: any) {
        return this.http.post<any>(`${environment.api}/tags`, value);
    }

    getTag() {
        return this.http.get<any>(`${environment.api}/tags`);
    }
}
