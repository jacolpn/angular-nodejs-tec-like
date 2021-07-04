import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-list-homenagem',
    templateUrl: './list-homenagem.component.html',
    styleUrls: ['./list-homenagem.component.css']
})
export class ListHomenagemComponent implements OnInit {
    employee: any = []
    fields: Array<PoDynamicViewField> = [
        { property: 'user_sender', label: 'user_sender', divider: 'Personal data', gridColumns: 4, order: 1 },
        { property: 'user_receiver', label: 'user_receiver', gridColumns: 4, order: 2 },
        { property: 'tag_id', label: 'tag_id', gridColumns: 4 },
        { property: 'message', label: 'message', gridColumns: 4 }
    ];

    constructor(private http: HttpClient) { }

    ngOnInit(): void { }

    getUser() {
        return this.http
        .get<any[]>(`${environment.api}/users/compliments/send`)
        .subscribe({
            next: restaurant => {
            this.employee = restaurant
            console.log(this.employee)
            },
            error: error => console.log(error)
        });
    }
}
