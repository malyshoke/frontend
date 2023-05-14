import {Component, OnInit} from '@angular/core';
import {ICompany} from "./company";
import {CompanyService} from "./company.service";
import {ITender} from "../tender/tender";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyId: number = 2;
  public companies: ICompany[] | undefined;

  constructor(private _compservice: CompanyService) { }

  ngOnInit(): void {
    this.getCompanies();
  }

  getCompanies(): void {
    this._compservice.getCompanies().subscribe(data => this.companies = data);
  }
}
