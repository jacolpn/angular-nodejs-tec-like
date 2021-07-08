import { Component, OnInit } from '@angular/core';
import { PoDynamicViewField } from '@po-ui/ng-components';

import { ListHomenagem } from './list-homenagem.model';
import { ListHomenagemService } from './list-homenagem.service';

@Component({
    selector: 'app-list-homenagem',
    templateUrl: './list-homenagem.component.html',
    styleUrls: ['./list-homenagem.component.css']
})
export class ListHomenagemComponent implements OnInit {
    employee: any = [];
    fields: Array<PoDynamicViewField> = [
        { property: 'user_sender', label: 'Pessoa', divider: '', gridColumns: 4, order: 1 },
        { property: 'tag_name', label: 'Atributo', tag: true, color: 'color-11', icon: 'po-icon-anchor' , gridColumns: 4, order: 2 },
        { property: 'created_at', label: 'Data', type: 'date', gridColumns: 4, order: 3 },
        { property: 'message', label: 'Mensagem', gridColumns: 12, order: 4 }
    ];

    constructor(private listHomenagemService: ListHomenagemService) { }

    ngOnInit(): void {
        if(this.employee.length == 0) {
            this.getReceiver();
        }
    }

    getReceiver() {
        this.listHomenagemService.getReceiverById('afda2700-7812-4d80-a199-162c72003b5e')
            .subscribe({
                next: value => {
                    this.employee = value.map((item: any) => new ListHomenagem(
                        item.userSender.name,
                        item.tag.name,
                        item.message,
                        item.created_at
                    ));

                    // console.log(this.employee)
                },
                error: error => console.log(error)
            });
    }
}
