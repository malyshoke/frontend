import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenderComponent} from "./components/tender/tender.component";
import {CompanyComponent} from "./components/company/company.component";


const routes: Routes = [
  {path: 'tender', component: TenderComponent},
  { path: 'tender/:name', component: TenderComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TenderComponent]
