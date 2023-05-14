import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentPage = window.location.href;

  constructor() {}

  ngOnInit(): void {
    if (this.currentPage === 'http://localhost:51055') {
      const mainPageElement = document.getElementById('main-page');
      if (mainPageElement) {
        mainPageElement.style.display = 'block';
      }
    } else {
      const mainPageElement = document.getElementById('main-page');
      if (mainPageElement) {
        mainPageElement.style.display = 'none';
      }
    }
  }
}
