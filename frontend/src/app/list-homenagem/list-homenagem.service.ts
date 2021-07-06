import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";

@Injectable()
export class ListHomenagemService {
    constructor(private http: HttpClient) { }
    
    getReceiverById(id: string) {
        return this.http.get<any>(`${environment.api}/users/compliments/receive/${id}`);
    }
}
