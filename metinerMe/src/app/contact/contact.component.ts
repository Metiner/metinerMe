import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    contactOpened = '<contact>';
    contactClosed = '</contact>';
    address = '<mail>';
    addressClosed = '</mail>';
    phone = '<phone>';
    phoneClosed = '</phone>';
    a = '<a href';
    aClosed = '</a>';

    expand: false;

    constructor() { }

  ngOnInit() {
  }

}
