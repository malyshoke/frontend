import {Component, OnInit} from '@angular/core';
import {ICompany} from "./company";
import {CompanyService} from "./company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companyId: number = 2;

  company: ICompany | undefined;

  constructor(private _compservice: CompanyService) { }

  ngOnInit(): void {
    this._compservice.getCompanyById(this.companyId).subscribe(data => this.company = data);
  }
}
