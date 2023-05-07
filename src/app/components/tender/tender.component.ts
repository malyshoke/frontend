import { Component, OnInit } from '@angular/core';
import { ITender } from './tender';
import { TenderService } from './tender.service';
import { CompanyService } from '../company/company.service';
@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {
  public tenders: ITender[] = [];
  viewType: string = 'table';
  public selectedCompanyId: number = 0;

  constructor(
    private _tenderservice: TenderService,
    private _companyservice: CompanyService,
  ) {}

  ngOnInit(): void {
    this._tenderservice.getTenders().subscribe(data => this.tenders = data);
  }
}
