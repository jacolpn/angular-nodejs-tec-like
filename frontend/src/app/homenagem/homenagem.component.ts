import { Component, OnInit } from '@angular/core';
import { PoDynamicFormField, PoNotificationService } from '@po-ui/ng-components';

import { Homenagem } from './homenagem.model';
import { HomenagemService } from './homenagem.service';

@Component({
    selector: 'app-homenagem',
    templateUrl: './homenagem.component.html',
    styleUrls: ['./homenagem.component.css']
})
export class HomenagemComponent implements OnInit {
    person = {};
    fields: Array<PoDynamicFormField> = [
        {
            property: 'user_sender',
            label: "Autor:",
            gridColumns: 6,
            required: true,
            options: [
                { label: 'JacoNeves', value: 'de30829b-c86f-47ea-ae5f-a77fcc6351f0' },
                { label: 'JacoBR', value: 'afda2700-7812-4d80-a199-162c72003b5e' },
                { label: 'Administrador', value: '1864e7cf-8bb6-40de-befc-8dd88c2e923e' },
                { label: 'Jackson TOTVS', value: '66d5b929-22d2-4158-9abc-5d5c1f0d90ab' }
            ]
        },
        {
            property: 'user_receiver',
            label: "Homenageado:",
            gridColumns: 6,
            required: true,
            options: [
                { label: 'JacoBR', value: 'afda2700-7812-4d80-a199-162c72003b5e' },
                { label: 'JacoNeves', value: 'de30829b-c86f-47ea-ae5f-a77fcc6351f0' },
                { label: 'Administrador', value: '1864e7cf-8bb6-40de-befc-8dd88c2e923e' },
                { label: 'Jackson TOTVS', value: '66d5b929-22d2-4158-9abc-5d5c1f0d90ab' }
            ]
        },
        {
            property: 'tag_id',
            label: 'Tag:',
            gridColumns: 6,
            required: true,
            options: [
                { label: 'Liderança', value: '3960d023-1e04-4af3-8a1d-22c1222a317a' },
                { label: 'Inovação', value: '78f04f8f-d98e-498b-8f05-f2a2a93efb74' },
                { label: 'Superação', value: '99af7013-9ac3-4244-9fec-03921194d4e7' },
                { label: 'Inspiração', value: '160b5629-ed11-4d86-9666-2acdf085feaa' }
            ]
        },
        {
            property: 'message',
            label: 'Mensagem:',
            gridColumns: 12,
            gridSmColumns: 12,
            required: true,
            rows: 5,
            placeholder: 'Type short description'
        }
    ];

    constructor(public poNotification: PoNotificationService, private homenagemService: HomenagemService) { }

    ngOnInit() { }

    sendHomenagem(homenage: Homenagem) {
        this.homenagemService
            .checkCompliment(homenage)
            .subscribe({
                    next: (value) => {
                        console.log(value);
                        this.poNotification.success('Data saved successfully!');
                    },
                    error: err => console.log(err)
            });
    }
}
