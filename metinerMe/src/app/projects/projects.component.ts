import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    projectsOpened = '<projects>';
    projectsClosed = '</projects>';
    expand = false;
    a = '<a href';
    aClosed = '</a>';

    constructor() { }

  ngOnInit() {
  }

}
