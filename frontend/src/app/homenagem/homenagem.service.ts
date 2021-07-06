import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { Homenagem } from "./homenagem.model";

@Injectable()
export class HomenagemService {
    constructor(private http: HttpClient) { }

    postCompliment(homenage: Homenagem): Observable<string> {
        return this.http.post<any>(`${environment.api}/compliments`, homenage);
    }
}
