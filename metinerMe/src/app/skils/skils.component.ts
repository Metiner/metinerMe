import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skils',
  templateUrl: './skils.component.html',
  styleUrls: ['./skils.component.scss']
})
export class SkilsComponent implements OnInit {

    skilsOpened = '<skils>';
    skilsClosed = '</skils>';
    expand = false;
    li = '<ul>';
    liClosed = '</ul>';

    constructor() { }

  ngOnInit() {
  }

}
