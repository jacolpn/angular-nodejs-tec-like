import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomenagemComponent } from './homenagem/homenagem.component';
import { ListHomenagemComponent } from './list-homenagem/list-homenagem.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'homenagens', component: HomenagemComponent },
  { path: 'list-homenagens', component: ListHomenagemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
