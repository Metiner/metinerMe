import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    aboutOpened = '<about>';
    aboutClosed = '</about>';
    expand = false;
    pOpened = '<p>';
    pClosed = '</p>';

    constructor() { }

  ngOnInit() {

  }

}
