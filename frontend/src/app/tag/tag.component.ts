import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PoDynamicViewField, PoNotificationService } from '@po-ui/ng-components';
import { Tag } from './tag.model';
import { TagService } from './tag.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {
    reactiveForm: any;
    employee: any = [];
    fields: Array<PoDynamicViewField> = [{ property: 'name', label: 'TAG' }];

    constructor(
        private fb: FormBuilder,
        private tagService: TagService,
        public poNotification: PoNotificationService
    ) { }

    
    ngOnInit(): void {
        this.reactiveForm = this.fb.group({
            name: [
                '',
                Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])
            ]
        });
    }

    saveForm() {
        this.tagService.postTag(this.reactiveForm.value).subscribe({
            next: () => this.poNotification.success(`Data saved successfully!`),
            error: err =>  this.poNotification.error(`${err.status}: ${err.error.error}`)
        });
    }

    loadTag() {
        this.tagService.getTag().subscribe({
            next: (value) => this.employee = value.map((item: any) => new Tag(item.name)),
            error: err =>  this.poNotification.error(`${err.status}: ${err.error.error}`)
        });
    }
}
