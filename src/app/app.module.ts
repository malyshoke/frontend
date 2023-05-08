import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TenderComponent } from './components/tender/tender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {TenderService} from "./components/tender/tender.service";
import {Routes} from "@angular/router";
import { CompanyComponent } from './components/company/company.component';
import {CompanyService} from "./components/company/company.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    TenderComponent,
    routingComponents,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    TenderService,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
