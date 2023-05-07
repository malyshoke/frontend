import { Component, OnInit } from '@angular/core';
import {ITender} from "./components/tender/tender";
import {TenderService} from "./components/tender/tender.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My App';
  tenders: ITender[] = [];

  constructor(private tenderService: TenderService) {}

  ngOnInit(): void {
    this.tenderService.getTenders().subscribe(
      (data: ITender[]) => {
        this.tenders = data;
        console.log(data); // выведет полученные данные в консоль
      },
      (error) => {
        console.log(error); // выведет ошибку в консоль
      }
    );
  }
}
