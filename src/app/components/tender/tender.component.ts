import { Component, OnInit } from '@angular/core';
import { ITender } from './tender';
import { TenderService } from './tender.service';
import { CompanyService } from '../company/company.service';
import { ICompany } from '../company/company';
import { Observable } from 'rxjs';
import { EMPTY } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {
  public tenders: ITender[] = [];
  public selectedCompanyId: number = 0;
  public company$: Observable<ICompany> = EMPTY;

  constructor(
    private _tenderservice: TenderService,
    private _companyservice: CompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._tenderservice.getTenders().subscribe(data => this.tenders = data);
  }
  onDetailsClick(companyId: number): void {
    this.selectedCompanyId = companyId;
    this.company$ = this._companyservice.getCompanyById(companyId);
    this.company$.subscribe(company => {
      this.router.navigate(['/company', company.companyId]);
    });
  }
}
