import { Component, OnInit } from '@angular/core';
import { ITender } from './tender';
import { TenderService } from './tender.service';
import { CompanyService } from '../company/company.service';
import {ActivatedRoute, Router} from '@angular/router';
import {lastValueFrom} from "rxjs";
@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {
  public tenders: ITender[] | undefined;
  viewType: string = 'table';
  public searchTerm: string = '';
  public showBackButton = false;
  sortOrder: string = 'asc'

  constructor(
    private _tenderservice: TenderService,
    private _companyservice: CompanyService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadTenders();
  }

  getTenders(): void {
    this._tenderservice.getTenders().subscribe(data => this.tenders = data);
  }

  async loadTenders(): Promise<void> {
    if (this.searchTerm.trim()) {
      this._tenderservice.searchTenders(this.searchTerm).subscribe(res => {
        console.log(this.tenders)
        console.log("Строка ввода НЕ пуста")
        this.tenders = res;
        console.log(this.tenders)
        this.showBackButton = true;
        this.router.navigate(['/tender', this.searchTerm]);
      })
    } else {
      console.log("Строка ввода пуста")
      this._tenderservice.getTenders().subscribe(data => this.tenders = data);
      this.showBackButton = false;
      this.searchTerm = '';
    }
  }

  async searchTender(): Promise<void> {
    if (this.searchTerm.trim()) {
      this.tenders = await this._tenderservice.searchTenders(this.searchTerm).toPromise();
      this.showBackButton = true;
      this.router.navigate(['/tender', this.searchTerm]);
    } else {
      this.showBackButton = false; // скрываем кнопку назад
      this.loadTenders();
    }
  }

  goBack() {
    this.router.navigateByUrl('/tender');
  }

  sortTenders() {
    if (this.sortOrder === 'asc') {
      if (this.tenders) {
        this.tenders.sort((a, b) => a.tenderBudget - b.tenderBudget);
      }
    } else if (this.sortOrder === 'desc') {
      if (this.tenders) {
        this.tenders.sort((a, b) => b.tenderBudget - a.tenderBudget);
      }
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/tenderdetails', id]);
  }

}
