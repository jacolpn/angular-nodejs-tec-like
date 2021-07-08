import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { HomenagemComponent } from './homenagem/homenagem.component';
import { ListHomenageadosComponent } from './list-homenageados/list-homenageados.component';
import { ListHomenagemComponent } from './list-homenagem/list-homenagem.component';
import { TagComponent } from './tag/tag.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'homenagens', component: HomenagemComponent },
    { path: 'list-homenagens', component: ListHomenagemComponent },
    { path: 'list-homenageados', component: ListHomenageadosComponent },
    { path: 'tag', component: TagComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
