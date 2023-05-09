import { Component, OnInit } from '@angular/core';
import { ITender } from './tender';
import { TenderService } from './tender.service';
import { CompanyService } from '../company/company.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {
  public tenders: ITender[] = [];
  viewType: string = 'table';
  public selectedCompanyId: number = 0;
  public searchTerm: string = '';

  constructor(
    private _tenderservice: TenderService,
    private _companyservice: CompanyService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTenders();
  }

  getTenders(): void {
    this._tenderservice.getTenders().subscribe(data => this.tenders = data);
  }

  searchTender(): void {
    if (this.searchTerm.trim()) {
      this._tenderservice.searchTenders(this.searchTerm).subscribe(data => {
        this.tenders = data;
        this.router.navigate(['/tender', this.searchTerm]);
      });
    } else {
      this.getTenders();
    }
  }

  goBack() {
    this.router.navigateByUrl('/tender');
  }

}
