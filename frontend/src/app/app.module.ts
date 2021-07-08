import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TagComponent } from './tag/tag.component';
import { HomenagemComponent } from './homenagem/homenagem.component';
import { ListHomenagemComponent } from './list-homenagem/list-homenagem.component';
import { ListHomenageadosComponent } from './list-homenageados/list-homenageados.component';

import { HomenagemService } from './homenagem/homenagem.service';
import { ListHomenagemService } from './list-homenagem/list-homenagem.service';
import { ListHomenageadosService } from './list-homenageados/list-homenageados.service';
import { TagService } from './tag/tag.service';

@NgModule({
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    declarations: [
        AppComponent,
        HomeComponent,
        HomenagemComponent,
        ListHomenagemComponent,
        ListHomenageadosComponent,
        TagComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        PoModule,
        RouterModule.forRoot([])
    ],
    providers: [
        HomenagemService,
        ListHomenagemService,
        ListHomenageadosService,
        TagService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
