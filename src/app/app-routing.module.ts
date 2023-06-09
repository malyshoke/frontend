import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenderComponent} from "./components/tender/tender.component";
import {CompanyComponent} from "./components/company/company.component";
import {TenderdetailsComponent} from "./components/tenderdetails/tenderdetails.component";
import {AuthComponent} from "./components/auth/auth.component";


const routes: Routes = [
  {path: 'tender', component: TenderComponent},
  { path: 'tender/:name', component: TenderComponent },
  {path: 'auth', component: AuthComponent},
  {path: 'company', component: CompanyComponent},
  { path: 'tenderdetails/:id', component: TenderdetailsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TenderComponent, TenderdetailsComponent, AuthComponent, CompanyComponent]
