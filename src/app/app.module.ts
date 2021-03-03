import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    OwlModule,
    ReactiveFormsModule,
    FormsModule,
    ParticlesModule,
    AppRoutingModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
