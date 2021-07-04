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
                { label: 'Jackson', value: 'de30829b-c86f-47ea-ae5f-a77fcc6351f0' },
                { label: 'Angélica', value: 'angelica' },
                { label: 'Neves', value: 'neves' },
                { label: 'Jacques', value: 'jacques' }
            ]
        },
        {
            property: 'user_receiver',
            label: "Homenageado:",
            gridColumns: 6,
            required: true,
            options: [
                { label: 'Jackson', value: 'afda2700-7812-4d80-a199-162c72003b5e' },
                { label: 'Angélica', value: 'angelica' },
                { label: 'Neves', value: 'neves' },
                { label: 'Jacques', value: 'jacques' }
            ]
        },
        {
            property: 'tag_id',
            label: 'Tag:',
            gridColumns: 6,
            required: true,
            options: [
                { label: 'Liderança', value: '160b5629-ed11-4d86-9666-2acdf085feaa' },
                { label: 'Inovação', value: 'inovacao' },
                { label: 'Procrastinação', value: 'procrastinacao' },
                { label: 'Topzera', value: 'topzera' }
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
