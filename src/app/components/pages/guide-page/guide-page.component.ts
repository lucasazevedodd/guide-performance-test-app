import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide-page',
  templateUrl: './guide-page.component.html',
  styleUrls: ['./guide-page.component.sass']
})
export class GuidePageComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 30; i++) {
      this.items.push({ id: i });
    }
  }
}
