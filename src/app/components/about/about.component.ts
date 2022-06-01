import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  texts = [
    'Having Strong Knowledge Of Web Development Technologies .',
    'Modern And Responsive Web Designs Using Javascript Vanilla And Css To Build Landing Pages From Scratch .',
    'Creating Wordpress Websites...',
    'Building a Single Page Applications Using Angular And React .',
    'Dealing with Server Side And Databases Using Nestjs And TypeORM Freamworks .',
  ]
  constructor() {

  }

  ngOnInit(): void {
  }


}



