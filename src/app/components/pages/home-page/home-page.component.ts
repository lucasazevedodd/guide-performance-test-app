import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  items = [];

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < 30; i++) {
      this.items.push({ id: i });
    }
  }

}
