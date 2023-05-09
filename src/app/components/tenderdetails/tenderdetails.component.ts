import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ITender } from '../tender/tender';
import { TenderdetailsService } from './tenderdetails.service';

@Component({
  selector: 'app-tenderdetails',
  templateUrl: './tenderdetails.component.html',
  styleUrls: ['./tenderdetails.component.css']
})
export class TenderdetailsComponent implements OnInit {
  tender: ITender | undefined;
  public id:number = 0;
  constructor(
    private _tenderDetailsService: TenderdetailsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id !== null) {
        this.id = +id;
        this._tenderDetailsService.getTenderById(this.id).subscribe((tender) => {
          this.tender = tender;
        });
      }
    });
  }
}
