import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenderComponent} from "./components/tender/tender.component";
import {CompanyComponent} from "./components/company/company.component";


const routes: Routes = [
  {path: "components/tender", component: TenderComponent},
  { path: '', redirectTo: '/tender', pathMatch: 'full' },
  { path: 'tender', component: TenderComponent },
  { path: 'company/:id', component: CompanyComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TenderComponent]
