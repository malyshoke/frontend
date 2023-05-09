import { Component, OnInit } from '@angular/core';
import { ITender } from './tender';
import { TenderService } from './tender.service';
import { CompanyService } from '../company/company.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {
  public tenders: ITender[] | undefined;
  viewType: string = 'table';
  public selectedCompanyId: number = 0;
  public searchTerm: string = '';
  public showBackButton = false;

  constructor(
    private _tenderservice: TenderService,
    private _companyservice: CompanyService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this.getTenders();
  }

  getTenders(): void {
    this._tenderservice.getTenders().subscribe(data => this.tenders = data);
  }

  async searchTender(): Promise<void> {
    if (this.searchTerm.trim()) {
      this.tenders = await this._tenderservice.searchTenders(this.searchTerm).toPromise();
      this.showBackButton = true;
      this.router.navigate(['/tender', this.searchTerm]);
    } else {
      this.showBackButton = false; // скрываем кнопку назад
      this.getTenders();
    }
  }

  goBack() {
    this.router.navigateByUrl('/tender');
  }

}
