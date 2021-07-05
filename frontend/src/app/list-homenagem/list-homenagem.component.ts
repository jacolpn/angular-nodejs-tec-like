import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

import { environment } from 'src/environments/environment';
import { ListHomenagem } from './list-homenagem.model';

@Component({
    selector: 'app-list-homenagem',
    templateUrl: './list-homenagem.component.html',
    styleUrls: ['./list-homenagem.component.css']
})
export class ListHomenagemComponent implements OnInit {
    employee: any = [];
    fields: Array<PoDynamicViewField> = [
        { property: 'user_sender', label: 'Pessoa', divider: 'Informações', gridColumns: 4, order: 1 },
        { property: 'tag_name', label: 'Atributo', tag: true, color: 'color-11', icon: 'po-icon-anchor' , gridColumns: 4, order: 2 },
        { property: 'created_at', label: 'Data', type: 'date', gridColumns: 4 },
        { property: 'message', label: 'Mensagem', gridColumns: 4 }
    ];

    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        if(this.employee.length == 0) {
            this.getUser();
        }
    }

    getUser() {
        return this.http
        .get<any[]>(`${environment.api}/users/compliments/receive`)
        .subscribe({
            next: restaurant => {
                this.employee = restaurant.map((item: any) => new ListHomenagem(
                    item.userSender.name,
                    item.tag.name,
                    item.message,
                    item.created_at
                ));

                console.log(restaurant)
                console.log(this.employee)
            },
            error: error => console.log(error)
        });
    }
}
