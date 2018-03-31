import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { HomeComponent } from './pages/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BeersPageComponent } from './pages/beers-page/beers-page.component';
import { FoodPageComponent } from './pages/food-page/food-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ToursPageComponent } from './pages/tours-page/tours-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LandingComponent,
    NavbarComponent,
    AboutPageComponent,
    BeersPageComponent,
    FoodPageComponent,
    EventsPageComponent,
    ContactPageComponent,
    ToursPageComponent,
    ShopPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
