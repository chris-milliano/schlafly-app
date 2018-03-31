import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from './pages';

const routes: Routes = [
    { path: '', component: Pages.HomeComponent },
    { path: 'about', component: Pages.AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
