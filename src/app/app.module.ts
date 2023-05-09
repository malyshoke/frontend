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
import {MatIconModule} from "@angular/material/icon";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import { TenderdetailsComponent } from './components/tenderdetails/tenderdetails.component';
import {TenderdetailsService} from "./components/tenderdetails/tenderdetails.service";

@NgModule({
  declarations: [
    AppComponent,
    TenderComponent,
    routingComponents,
    CompanyComponent,
    TenderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    MatOptionModule,
    MatSelectModule
  ],
  providers: [
    TenderService,
    CompanyService,
    TenderdetailsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
