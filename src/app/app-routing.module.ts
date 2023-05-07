import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TenderComponent} from "./components/tender/tender.component";


const routes: Routes = [
  {path: "components/tender", component: TenderComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TenderComponent]
