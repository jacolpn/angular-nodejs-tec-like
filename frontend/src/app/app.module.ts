import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HomenagemComponent } from './homenagem/homenagem.component';
import { ListHomenagemComponent } from './list-homenagem/list-homenagem.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomenagemService } from './homenagem/homenagem.service';
import { CommonModule } from '@angular/common';

@NgModule({
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [
    AppComponent,
    HomeComponent,
    HomenagemComponent,
    ListHomenagemComponent
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
  providers: [HomenagemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
