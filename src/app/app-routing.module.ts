import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as Pages from './pages';

const routes: Routes = [
    { path: '', component: Pages.HomeComponent },
    { path: 'about', component: Pages.AboutPageComponent },
    { path: 'beers', component: Pages.BeersPageComponent },
    { path: 'contact', component: Pages.ContactPageComponent },
    { path: 'events', component: Pages.EventsPageComponent },
    { path: 'food', component: Pages.FoodPageComponent },
    { path: 'shop', component: Pages.ShopPageComponent },
    { path: 'tours', component: Pages.ToursPageComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
