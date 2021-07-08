import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { environment } from "src/environments/environment";

@Injectable()
export class ListHomenageadosService {
    constructor(private http: HttpClient) { }
    
    getUserSendById(id: string) {
        return this.http.get<any>(`${environment.api}/users/compliments/send/${id}`);
    }
}
