import { Component, OnInit } from '@angular/core';
import {ITender} from "./tender";
import {TenderService} from "./tender.service";

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.css']
})
export class TenderComponent implements OnInit {
  public tenders: ITender[] = []
  constructor(private _tenderservice: TenderService) { }
  ngOnInit(): void {
    this._tenderservice.getTenders().subscribe(data => this.tenders = data);
  }
}
